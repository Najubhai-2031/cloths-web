import React from "react";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";
import p8 from "../assets/images/p8.png";

const Shop = () => {
  return (
    <>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src={p1} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Ring</h6>
                    <h6>
                      Price
                      <span>$200</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src={p2} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Watch</h6>
                    <h6>
                      Price
                      <span>$300</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src={p3} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Teddy Bear</h6>
                    <h6>
                      Price
                      <span>$110</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src={p4} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Flower Bouquet</h6>
                    <h6>
                      Price
                      <span>$45</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src={p5} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Teddy Bear</h6>
                    <h6>
                      Price
                      <span>$95</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src={p6} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Flower Bouquet</h6>
                    <h6>
                      Price
                      <span>$70</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src={p7} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Watch</h6>
                    <h6>
                      Price
                      <span>$400</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src={p8} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Ring</h6>
                    <h6>
                      Price
                      <span>$450</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All Products</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
