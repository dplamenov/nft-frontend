import { useState, useEffect } from 'react'
import {ethers} from 'ethers';

function Marketplace({nft, marketplace, account}) {
  const [loading, setLoading] = useState(true)
  const [listedItems, setListedItems] = useState([])
  const [soldItems, setSoldItems] = useState([])

  const loadListedItems = async () => {
    // Load all sold items that the user listed
    const itemCount = await marketplace.itemCount()
    let listedItems = []
    let soldItems = []
    for (let indx = 1; indx <= itemCount; indx++) {
      const i = await marketplace.items(indx)
        console.log(account);
        // get uri url from nft contract
        const uri = await nft.tokenURI(i.tokenId)
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri)
        const metadata = await response.json()
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(i.itemId)
        // define listed item object
        let item = {
          totalPrice,
          price: i.price,
          itemId: i.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        }
        listedItems.push(item);
        // Add listed item to sold items array if sold
        if (i.sold) soldItems.push(item)
  
    }
    setLoading(false)
    setListedItems(listedItems)
    setSoldItems(soldItems)
  }
  
  useEffect(() => {
    loadListedItems()
  }, [])

  return (
   <>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="subheader" className="text-light" data-bgimage="url(images/background/subheader.jpg) top">
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">

                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="section">
          <div className="container">
            <div className="row wow fadeIn">
              <div className="col-lg-12">

                <div className="items_filter">
                  <form action="blank.php" className="row form-dark" id="form_quick_search" method="post" name="form_quick_search">
                    <div className="col text-center">
                      <input className="form-control" id="name_1" name="name_1" placeholder="search item here..." type="text" /> <a href="#" id="btn-submit"><i className="fa fa-search bg-color-secondary"></i></a>
                      <div className="clearfix"></div>
                    </div>
                  </form>

                  <div id="item_category" className="dropdown">
                    <a href="#" className="btn-selector">All categories</a>
                    <ul>
                      <li className="active"><span>All categories</span></li>
                      <li><span>Art</span></li>
                      <li><span>Music</span></li>
                      <li><span>Domain Names</span></li>
                      <li><span>Virtual World</span></li>
                      <li><span>Trading Cards</span></li>
                      <li><span>Collectibles</span></li>
                      <li><span>Sports</span></li>
                      <li><span>Utility</span></li>
                    </ul>
                  </div>

                  <div id="buy_category" className="dropdown">
                    <a href="#" className="btn-selector">Buy Now</a>
                    <ul>
                      <li className="active"><span>Buy Now</span></li>
                      <li><span>On Auction</span></li>
                      <li><span>Has Offers</span></li>
                    </ul>
                  </div>

                  <div id="items_type" className="dropdown">
                    <a href="#" className="btn-selector">All Items</a>
                    <ul>
                      <li className="active"><span>All Items</span></li>
                      <li><span>Single Items</span></li>
                      <li><span>Bundles</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              {loading && <h1>Loading</h1>}
              {listedItems.map((item, key) => {
                return (
                  <div className={`${key >= 8 ? 'd-item': ''} col-lg-3 col-md-6 col-sm-6 col-xs-120`} key={key}>
                    <div className="nft__item">
                        <div className="de_countdown" data-year="2021" data-month="9" data-day="16" data-hour="8"></div>
                        <div className="author_list_pp">
                          <a href="author.html">
                            <img className="lazy" src="images/author/author-1.jpg" alt="" />
                            <i className="fa fa-check"></i>
                          </a>
                        </div>
                        <div className="nft__item_wrap">
                          <a href="item-details.html">
                            <img src={item.image} className="lazy nft__item_preview" alt="" />
                          </a>
                        </div>
                        <div className="nft__item_info">
                          <a href="item-details.html">
                            <h4>{item.name}</h4>
                          </a>
                          <div className="nft__item_price">
                          {ethers.utils.formatEther(item.totalPrice)} ETH<span>1/20</span>
                          </div>
                          <div className="nft__item_action">
                            <a href="#">Place a bid</a>
                          </div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i><span>50</span>
                          </div>
                        </div>
                    </div>
                  </div>
               );
              })}
              {listedItems.length > 8 && <div className="col-md-12 text-center">
                <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">Load more</a>
              </div>}
            </div>
          </div>
        </section>

      </div>
   </>
  );
}

export default Marketplace;