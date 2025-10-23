import PageTitle from "@/components/common/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Doctors from "@/components/otherPages/Doctors";

import React from "react";
export const metadata = {
  title: "Doctor || A Priority Care – Medical & Dentist React Nextjs Tempate",
  description: "A Priority Care – Medical & Dentist React Nextjs Tempate",
};
export default function page() {
  return (
    <>
      <div className="color-1">
        <Header1 />
        <PageTitle pageName="Doctor" />
        <div id="main-content" className="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" className="site-content clearfix">
              <div id="inner-content" className="inner-content-wrap">
                <div className="page-content">
                  <Doctors />
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
