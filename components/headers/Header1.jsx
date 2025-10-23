import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import MobileMenuToggle from "./MobileMenuToggle";

export default function Header1() {
  return (
    <header className="header clearfix">
      <div id="header">
        <div id="site-header">
          {/* Logo */}
          <div className="logo">
            <Link href={`/#`}>
              <Image
                alt="A Priority Care Logo"
                src="/assets/image/LogoDark.webp"
                width={200}
                height={50}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-wrap">
            <nav id="mainnav" className="mainnav">
              <ul className="menu">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Clients</a></li>
                <li><a href="#process">Process</a></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info & Appointment Button */}
          <div className="contact">
            <div className="top-bar-right">
              <div className="call-us">
                <div className="icon-call-us" />
                <div className="content-call-us">
                  <p>Call Us</p>
                  <a
                    href="tel:9514129091"
                    className="font-bold text-color-title-sidebar"
                  >
                    (951) 412-9091
                  </a>
                </div>
              </div>
              <div className="button-header">
                <Link
                  href="#contact"
                  className="themesflat-button bg-accent btn-header"
                >
                  <span>Get Appointment</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileMenuToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
}
