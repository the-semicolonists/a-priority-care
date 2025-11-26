"use client";
import React, { useRef } from "react";
import Image from "next/image";

export default function Contact() {
  const formRef = useRef(null);

  // Format phone number as (XXX) - XXX XXXX
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (input.length > 10) input = input.slice(0, 10);

    let formatted = "";
    if (input.length > 0) formatted += "(" + input.slice(0, 3);
    if (input.length >= 4) formatted += ") - " + input.slice(3, 6);
    if (input.length >= 7) formatted += " " + input.slice(6, 10);

    e.target.value = formatted;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Google Form entry IDs
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeABjEhVJnXhhJacNHbJ7UkPQ_H7vdVHSeVj7cJkN43Z3doyQ/formResponse";

    const formData = new FormData();
    formData.append("entry.1676264414", formRef.current.elements["name"].value);
    formData.append(
      "entry.1134576357",
      formRef.current.elements["phone"].value
    );
    formData.append("entry.53978705", formRef.current.elements["email"].value);
    formData.append(
      "entry.1757307627",
      formRef.current.elements["message"].value
    );

    // Create a temporary form to submit to Google Forms in a new tab
    const tempForm = document.createElement("form");
    tempForm.action = googleFormUrl;
    tempForm.method = "POST";
    tempForm.target = "_blank";

    formData.forEach((value, key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    });

    document.body.appendChild(tempForm);
    tempForm.submit();
    document.body.removeChild(tempForm);

    // Clear original form
    formRef.current.reset();
  };

  return (
    <section id="contact" className="fl-row contact-us">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="fl-box-contact">
              {/* Google Map */}
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.879759841395!2d-117.14640618488123!3d33.50184428074205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7cd91368ab87%3A0x9b90e7ff4f8707a2!2s41877%20Enterprise%20Cir%20N%20%23200%2C%20Temecula%2C%20CA%2092590!5e0!3m2!1sen!2sus!4v1706050000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Form */}
              <div className="form-contact-us fl-st-title">
                <h3 className="heading theme-color">CONTACT US</h3>
                <div className="title-heading text-color-white">
                  Have Questions? <br /> Get in Touch!
                </div>
                <form
                  ref={formRef}
                  className="content-form wow fadeInUp"
                  onSubmit={handleSubmit}
                  acceptCharset="utf-8"
                >
                  <div className="row">
                    <div className="col">
                      <input
                        tabIndex={1}
                        id="name"
                        name="name"
                        className="input-contact"
                        type="text"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        tabIndex={2}
                        id="phone"
                        name="phone"
                        className="input-contact"
                        type="text"
                        placeholder="Phone Number"
                        required
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="email"
                        tabIndex={3}
                        id="email"
                        name="email"
                        className="input-contact"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      tabIndex={5}
                      className="form-control"
                      placeholder="Your Message"
                      maxLength={1000}
                      id="exampleFormControlTextarea2"
                    />
                  </div>
                  <div className="box-submit">
                    <button
                      name="submit"
                      id="submit"
                      type="submit"
                      className="themesflat-button bg-accent btn-submit"
                    >
                      <span>Send</span>
                    </button>
                  </div>
                </form>

                <Image
                  alt="image"
                  className="img-box-1"
                  src="/assets/image/pattern/Ellipse924.webp"
                  width={211}
                  height={211}
                />
                <Image
                  alt="image"
                  className="img-box-2"
                  src="/assets/image/thumbnails/logocontact.webp"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
