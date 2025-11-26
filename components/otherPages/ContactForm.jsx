"use client";
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const isFormValid =
    formState.name.trim() !== "" &&
    formState.phone.trim().length === 14 &&
    formState.email.trim() !== "" &&
    formState.message.trim() !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 10) input = input.slice(0, 10);

    let formatted = "";
    if (input.length > 0) formatted += "(" + input.slice(0, 3);
    if (input.length >= 4) formatted += ") - " + input.slice(3, 6);
    if (input.length >= 7) formatted += " " + input.slice(6, 10);

    setFormState({ ...formState, phone: formatted });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeABjEhVJnXhhJacNHbJ7UkPQ_H7vdVHSeVj7cJkN43Z3doyQ/formResponse";

    const formData = new FormData();
    formData.append("entry.1676264414", formState.name);
    formData.append("entry.1134576357", formState.phone);
    formData.append("entry.53978705", formState.email);
    formData.append("entry.1757307627", formState.message);

    // Create a temporary form to submit to Google Forms
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
    setFormState({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-bot">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={296}
            data-mobile={220}
            data-smobile={815}
          />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box-map-contact wow fadeInDown">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                width={600}
                height={450}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box-form-contact wow fadeInDown">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={50}
                data-smobile={50}
              />
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
                      value={formState.name}
                      onChange={handleChange}
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
                      value={formState.phone}
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
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      tabIndex={4}
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    tabIndex={5}
                    placeholder="Your Message"
                    maxLength={1000}
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="box-submit">
                      <button
                        name="submit"
                        id="submit"
                        type="submit"
                        className="themesflat-button bg-accent btn-submit"
                        role="button"
                        disabled={!isFormValid}
                      >
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/*/box-form-contact*/}
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={235}
            data-mobile={200}
            data-smobile={100}
          />
        </div>
      </div>
    </section>
  );
}
