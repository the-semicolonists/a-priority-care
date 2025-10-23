import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="fl-row intro-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-intro-top">
              {/* LEFT SIDE IMAGES */}
              <div className="box-features-intro">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={35}
                  data-mobile={35}
                  data-smobile={35}
                />
                <div className="features-intro-top wow fadeInDown">
                  <Image
                    alt="Caregiver helping client at home"
                    src="/assets/image/common/MaskGroup9.webp"
                    width={477}
                    height={582}
                  />
                  <div className="features-inner">
                    <Image
                      alt="Pattern background"
                      src="/assets/image/pattern/Path18193.webp"
                      width={477}
                      height={378}
                    />
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={20}
                  data-mobile={20}
                  data-smobile={20}
                />
              </div>

              {/* RIGHT SIDE CONTENT */}
              <div className="box-content-intro">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={87}
                  data-mobile={70}
                  data-smobile={50}
                />
                <h3 className="heading">WHAT WE DO</h3>
                <div className="title-heading wow fadeInUp">
                  Personalized Care <br />
                  You Can Trust
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={15}
                  data-mobile={15}
                  data-smobile={15}
                />

                <div className="row-content-intro wow fadeInUp">
                  <div className="cl-content-intro">
                    <div className="box-icon">
                      <i className="icon-Path-18154 font-size-big" />
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={28}
                      data-mobile={28}
                      data-smobile={28}
                    />
                    <h3>
                      <Link href={`/services`}>In-Home Support</Link>
                    </h3>
                    <p>
                      Reliable care for seniors, recovery patients, and
                      individuals with disabilities — all from the comfort of
                      home.
                    </p>
                  </div>

                  <div className="cl-content-intro">
                    <div className="box-icon">
                      <i className="icon-Path-18158 font-size-big" />
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={28}
                      data-mobile={28}
                      data-smobile={28}
                    />
                    <h3>
                      <Link href={`/services`}>Trusted Caregivers</Link>
                    </h3>
                    <p>
                      Our experienced team provides professional, compassionate
                      care that families can depend on every day.
                    </p>
                  </div>
                </div>

                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={45}
                  data-mobile={45}
                  data-smobile={20}
                />
                <div className="box-button">
                  <Link
                    href={`/contact`}
                    className="themesflat-button bg-accent btn-header"
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={78}
                  data-mobile={70}
                  data-smobile={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
