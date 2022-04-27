import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="section-hero" aria-label="section" className="text-light overflow-hidden" data-bgimage="url(images/background/2.jpg) top">
          <div id="particles-js"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="text_top">
                  <div className="spacer-double"></div>
                  <h1>Create and sell your own unique NFTs.</h1>
                  <p className="lead">Easiest place to buy and sell cryptocurrency.<br />Sign up and get started today.</p>
                  <div className="spacer-20"></div>
                  <Link to="/marketplace" className="btn-main">Explore</Link>&nbsp;&nbsp;
                  <Link to="/create" className="btn-main btn-white">Create</Link>
                  <div className="spacer-double"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-nfts">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2>Popular Items</h2>
                  <div className="small-border bg-color-2"></div>
                </div>
              </div>
            </div>
            <div className="row wow fadeIn">
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
                      <img src="images/items/static-1.jpg" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Pinky Ocean</h4>
                    </a>
                    <div className="nft__item_price">
                      0.08 ETH<span>1/20</span>
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
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-10.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/static-2.jpg" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Deep Sea Phantasy</h4>
                    </a>
                    <div className="nft__item_price">
                      0.06 ETH<span>1/22</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="de_countdown" data-year="2021" data-month="9" data-day="14" data-hour="8"></div>
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-11.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/static-3.jpg" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Rainbow Style</h4>
                    </a>
                    <div className="nft__item_price">
                      0.05 ETH<span>1/11</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>97</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-12.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/static-4.jpg" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Two Tigers</h4>
                    </a>
                    <div className="nft__item_price">
                      0.02 ETH<span>1/15</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>73</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-9.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/anim-4.webp" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>The Truth</h4>
                    </a>
                    <div className="nft__item_price">
                      0.06 ETH<span>1/20</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>26</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="de_countdown" data-year="2021" data-month="9" data-day="20" data-hour="8"></div>
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-2.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/anim-2.webp" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Running Puppets</h4>
                    </a>
                    <div className="nft__item_price">
                      0.03 ETH<span>1/24</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>45</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-3.jpg" alt=""/>
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/anim-1.webp" className="lazy nft__item_preview" alt=""/>
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>USA Wordmation</h4>
                    </a>
                    <div className="nft__item_price">
                      0.09 ETH<span>1/25</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>76</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="de_countdown" data-year="2021" data-month="9" data-day="29" data-hour="8"></div>
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/anim-5.webp" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Loop Donut</h4>
                    </a>
                    <div className="nft__item_price">
                      0.09 ETH<span>1/14</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>94</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="de_countdown" data-year="2021" data-month="9" data-day="16" data-hour="8"></div>
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-5.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/anim-3.webp" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Lady Copter</h4>
                    </a>
                    <div className="nft__item_price">
                      0.08 ETH<span>1/21</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>75</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-7.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/static-5.jpg" className="lazy nft__item_preview" alt=""/>
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Purple Planet</h4>
                    </a>
                    <div className="nft__item_price">
                      0.02 ETH<span>1/18</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>93</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="de_countdown" data-year="2021" data-month="9" data-day="16" data-hour="8"></div>
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-6.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/anim-6.webp" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Oh Yeah!</h4>
                    </a>
                    <div className="nft__item_price">
                      0.025 ETH<span>1/12</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>6</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-8.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/anim-7.webp" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>This is Our Story</h4>
                    </a>
                    <div className="nft__item_price">
                      0.035 ETH<span>1/8</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>21</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-9.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/static-6.jpg" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Pixel World</h4>
                    </a>
                    <div className="nft__item_price">
                      0.015 ETH<span>1/25</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>46</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-12.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/anim-8.webp" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>I Believe I Can Fly</h4>
                    </a>
                    <div className="nft__item_price">
                      0.055 ETH<span>1/4</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>54</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-4.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Cute Astronout</h4>
                    </a>
                    <div className="nft__item_price">
                      0.005 ETH<span>1/30</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>32</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img className="lazy" src="images/author/author-1.jpg" alt="" />
                        <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="item-details.html">
                      <img src="images/items/static-8.jpg" className="lazy nft__item_preview" alt="" />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="item-details.html">
                      <h4>Teal Ocean</h4>
                    </a>
                    <div className="nft__item_price">
                      0.025 ETH<span>1/12</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i><span>24</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 text-center">
                <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">Load more</a>
              </div>
            </div>
          </div>
        </section>

        <section id="section-collections" data-bgcolor="#F7F4FD">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2>Hot Collections</h2>
                  <div className="small-border bg-color-2"></div>
                </div>
              </div>
              <div id="collection-carousel" className="owl-carousel wow fadeIn">

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="collection.html"><img src="images/collections/coll-1.jpg" className="lazy img-fluid" alt="" /></a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="collection.html"><img className="lazy" src="images/author/author-1.jpg" alt="" /></a>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <a href="collection.html">
                      <h4>Abstraction</h4>
                    </a>
                    <span>ERC-192</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="collection.html"><img src="images/collections/coll-2.jpg" className="lazy img-fluid" alt="" /></a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="collection.html"><img className="lazy" src="images/author/author-2.jpg" alt="" /></a>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <a href="collection.html">
                      <h4>Patternlicious</h4>
                    </a>
                    <span>ERC-61</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="collection.html"><img src="images/collections/coll-3.jpg" className="lazy img-fluid" alt="" /></a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="collection.html"><img className="lazy" src="images/author/author-3.jpg" alt="" /></a>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <a href="collection.html">
                      <h4>Skecthify</h4>
                    </a>
                    <span>ERC-126</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="collection.html"><img src="images/collections/coll-4.jpg" className="lazy img-fluid" alt="" /></a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="collection.html"><img className="lazy" src="images/author/author-4.jpg" alt="" /></a>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <a href="collection.html">
                      <h4>Cartoonism</h4>
                    </a>
                    <span>ERC-73</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="collection.html"><img src="images/collections/coll-5.jpg" className="lazy img-fluid" alt="" /></a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="collection.html"><img className="lazy" src="images/author/author-5.jpg" alt="" /></a>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <a href="collection.html">
                      <h4>Virtuland</h4>
                    </a>
                    <span>ERC-85</span>
                  </div>
                </div>

                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="collection.html"><img src="images/collections/coll-6.jpg" className="lazy img-fluid" alt="" /></a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="collection.html"><img className="lazy" src="images/author/author-6.jpg" alt="" /></a>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <a href="collection.html">
                      <h4>Papercut</h4>
                    </a>
                    <span>ERC-42</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          </section>
      </div>
    </>
  );
}

export default HomePage;
