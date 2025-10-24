"use client";
import React from "react";
import Image from "next/image";
import BacktoTop from "../common/BacktoTop";

export default function Footer1() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={50}
            data-mobile={50}
            data-smobile={20}
          />

          <div className="row">
            <div className="col-12">
              <div className="box-list-footer">
                {/* Column 1: Letter from Krys */}
                <div className="box-list box-contact-3">
                  <div className="title-footer text-color-white">
                    A Priority Care
                  </div>
                  <ul className="one-half first mt-5">
                    <li className="text-color-white">
                      "At A Priority Care, we provide compassionate in-home care
                      for seniors, injured individuals, and anyone needing
                      assistance with daily life. Our mission is to make life
                      safer and easier for you and your loved ones." <br />
                    </li>
                  </ul>
                </div>

                {/* Column 2: Contact Info */}
                <div className="box-list box-contact">
                  <div className="title-footer text-color-white">
                    Contact Us
                  </div>
                  <ul className="one-half first">
                    {/* <li>
                      <span><i className="fas fa-user" /></span>
                      <span className="ml-2">Krys Shane</span>
                    </li> */}
                    <li>
                      <span>
                        <i className="fas fa-phone-alt" />
                      </span>
                      <span className="ml-2">
                        <a href="tel:9514129091">(951) 412-9091</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-envelope" />
                      </span>
                      <span className="ml-2">
                        <a href="mailto:careteam@aprioritycare.com">
                          careteam@aprioritycare.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <span className="ml-2">
                        41877 Enterprise Cir N Suite 200, Temecula, CA 92590
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="themesflat-spacer clearfix"
            data-desktop={50}
            data-mobile={30}
            data-smobile={20}
          />
        </div>

        {/* Keep Footer Bottom As Is */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="logo-bottom">
                <a href="">
                  <Image
                    alt="image"
                    src="/assets/image/Logolight.webp"
                    width={198}
                    height={54}
                  />
                </a>
              </div>
              <h3 className="copyright">
                © aprioritycare {new Date().getFullYear()} | all rights reserved
              </h3>
              <ul className="list-icon-bottom">
                <li className="bottom-icon-active">
                  <a href="#" title="">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="bottom-icon-style">
                  <a href="#" title="">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="bottom-icon-style">
                  <a href="#" title="">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="bottom-icon-style">
                  <a href="#" title="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*/.footer-bottom*/}
      </footer>
      <BacktoTop />
    </>
  );
}
