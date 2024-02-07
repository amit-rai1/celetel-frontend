import { Fragment, useState } from "react";
import "./Contact.css";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { Footer } from "../Footer/Footer";
import { contactUs } from "../Service/auth.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleContactUs = async (e) => {
    e.preventDefault();
    try {
      const response = await contactUs(formData);
      if (response.success === true) {
        toast.success(response.msg);
        console.log(response.data);
      } else {
        toast.error("Please try again");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleContactChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <div className="main_con">
        <div className="form_content">
          <div className="side_form_content">
            <div className="contact_head">
              <h1>Contact Us</h1>
              <p>
                Ready to accelerate your business's transformation.We're at your
                service!
              </p>
              <div className="icons_cont">
                <a href="https://www.instagram.com/celetel_technologies/">
                  <FaInstagram/>
                </a>
                <p>
                  <FaLinkedin href="https://www.linkedin.com/company/celetelasia/" />
                </p>
                <p>
                  <FaFacebook />
                </p>
              </div>
            </div>
            <div className="next_step_1">
              <h1>What will be next step?</h1>
              <p>
                You are one step closer to grow your business with our best
                team.
              </p>
            </div>

            <div className="next_step_steps">
              <div className="next_step_steps10">
                <p>01</p>
              </div>
              <div className="text_ment20">
                <h4>We'll prepare a proposal</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Curabitur nec in
                  tristique dignissim. Consectetur morbi tristique etiam
                  molestie lobortis sagittis massa.
                </span>
              </div>
              <div className="next_step_steps10">
                <p>02</p>
              </div>
              <div className="text_ment20">
                <h4>Together we discuss it</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Curabitur nec in
                  tristique dignissim. Consectetur morbi tristique etiam
                  molestie lobortis sagittis mas.
                </span>
              </div>
              <div className="next_step_steps10">
                <p>03</p>
              </div>
              <div className="text_ment20">
                <h4>Lets start growing</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Curabitur nec in
                  tristique dignissim. Consectetur morbi tristique etiam
                  molestie lobortis sagittis massa.
                </span>
              </div>
            </div>
          </div>

          <div className="sub_cont_form">
            <div className="para_new_c">
              <p>
                <BiMessageDetail />
              </p>
              <span>
                Write us a few words about your project and well prepare
                proposal for you
              </span>
            </div>

            <div className="form_con">
              <form onSubmit={handleContactUs}>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleContactChange}
                />

                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleContactChange}
                />

                <label htmlFor="">What service are you interested in</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleContactChange}
                >
                  <option value="">Select project type</option>
                  <option value="Sms">Sms</option>
                  <option value="Rcs">Rcs</option>
                  <option value="voice">voice</option>
                  <option value="Whatsapp">Whatsapp</option>
                  <option value="verification">verification</option>
                </select>

                <label htmlFor="">Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleContactChange}
                >
                  <option value="">Select project budget</option>
                  <option value="Testing 5k">Testing 5k</option>
                  <option value="Testing 8k">Testing 8k</option>
                  <option value="Testing 6k">Testing 6k</option>
                  <option value="Testing 4k">Testing 4k</option>
                  <option value="Testing 7k">Testing 7k</option>
                  <option value="Testing 10k">Testing 10k</option>
                </select>

                <label htmlFor="">Message</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  value={formData.message}
                  onChange={handleContactChange}
                ></textarea>

                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}
