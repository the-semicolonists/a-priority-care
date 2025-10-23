import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Contact from "@/components/homes/home-1/Contact";
import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Process from "@/components/homes/home-1/Process";
import Services from "@/components/homes/home-1/Services";

export const metadata = {
  title: "Home 1 || A Priority Care – Medical & Care Services",
  description: "A Priority Care – Compassionate in-home care services",
};

export default function Home() {
  return (
    <>
      <div className="color-1">
        <Header1 />
        <div id="main-content" className="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" className="site-content clearfix">
              <div id="inner-content" className="inner-content-wrap">
                <div className="page-content">

                  {/* Hero Section */}
                  <div id="hero">
                    <Hero />
                  </div>

                  {/* About Section */}
                  <div id="about" style={{ scrollMarginTop: "300px" }}>
                    <About />
                  </div>

                  {/* Services Section */}
                  <div id="services">
                    <Services />
                  </div>

                  {/* Portfolio Section */}
                  <div id="portfolio">
                    <Portfolio />
                  </div>

                  {/* Process Section */}
                  <div id="process">
                    <Process />
                  </div>

                  {/* Contact Section */}
                  <div id="contact">
                    <Contact />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
