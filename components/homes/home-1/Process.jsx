import React from "react";
import Link from "next/link";
import Image from "next/image";
import { processItems } from "@/data/process";

export default function Process() {
  return (
    <section className="fl-row process">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={120}
            data-mobile={70}
            data-smobile={70}
          />
        </div>

        {/* Heading */}
        <div className="row">
          <div className="col-12">
            <div className="box-heading-process text-center">
              <h3 className="heading wow fadeInUp">OUR PROCESS</h3>
              <div className="title-heading text-color-title-sidebar wow fadeInUp">
                Every Step Focused <br />
                On Your Care
              </div>
            </div>
          </div>
        </div>

        <div
          className="themesflat-spacer clearfix"
          data-desktop={20}
          data-mobile={20}
          data-smobile={20}
        />

        {/* Steps */}
        <div className="row">
          {processItems.map((item) => (
            <div key={item.id} className="col-lg-4">
              <div className="col-process">
                <div
                  className="box-process wow fadeInUp"
                  data-wow-delay={item.animationDelay}
                >
                  <div className="feature-process">
                    {item.spacer && (
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={item.spacer.desktop}
                        data-mobile={item.spacer.mobile}
                        data-smobile={item.spacer.smobile}
                      />
                    )}
                    <Image
                      alt={item.title}
                      src={item.imageSrc}
                      width={item.imageWidth}
                      height={item.imageHeight}
                    />
                  </div>
                  <div className="box-wrap pdt-30">
                    <h2>{item.title}</h2>
                    <p className="text-color-title-sidebar">{item.description}</p>
                    <div className="flat-read-more">
                      <Link
                        href="/#contact"
                        className="themesflat-button font-default process"
                      >
                        <span>
                          Get Started
                          <i className="fa fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="themesflat-spacer clearfix"
          data-desktop={110}
          data-mobile={50}
          data-smobile={40}
        />
      </div>
    </section>
  );
}
