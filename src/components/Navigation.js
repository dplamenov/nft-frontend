import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  useEffect(() => {
    const paths = [
      "js/designesia.js",
    ];

    paths.forEach(path => {
      const script = document.createElement("script");
      script.src = path;
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);
    })
  }, [location]);

  return (
   <>
      <header className="transparent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    <div id="logo">
                      <Link to="/">
                        <img alt="" className="logo" src="images/logo-light.png" />
                        <img alt="" className="logo-2" src="images/logo.png" />
                      </Link>
                    </div>
                  </div>
                  <div className="de-flex-col">
                    <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <Link to="/">Home<span></span></Link>
                    </li>
                    <li>
                      <Link to="/marketplace">Marketplace<span></span></Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us<span></span></Link>
                    </li>
                  </ul>
                  <div className="menu_side_area">
                    <a href="wallet.html" className="btn-main"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                    <span id="menu-btn"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;