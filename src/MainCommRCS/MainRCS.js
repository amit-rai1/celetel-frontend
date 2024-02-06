import React, { Fragment } from "react";
import "./MainRCS.css";
import image1 from "../Assets/iPhone 14.svg";
import image2 from "../Assets/iPhone 17.svg";
import image3 from "../Assets/Smartphone with messenger chat screen.svg";
import image4 from "../Assets/Messages.svg";
import { Footer } from "../Footer/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import Rcs1 from "../Assets/IconRCS.svg";
import Rcs2 from "../Assets/iconRCS2.svg";
import Rcs3 from "../Assets/IconRCS3.svg";


export function MainRCS() {
  return (
    <Fragment>
      <div className="main_sol_page_rcs">
        <div className="new_svg_impo">
          <h1>The Future of Enhanced Communication</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="149"
            height="250"
            viewBox="0 0 149 250"
            fill="none"
          >
            <path
              d="M161.102 1.30099C182.417 35.0728 193.905 76.4117 158.712 127.497C139.921 154.774 100.177 181.043 73.5403 166.58C55.3989 156.73 40.3229 130.542 66.9465 106.287C96.3464 79.5028 87.6042 140.768 84.8867 147.801C72.1678 180.719 50.02 208.914 19.7692 240.693C8.43741 252.597 18.3017 248.275 28.4118 241.699C37.1839 235.994 47.0473 229.391 54.3601 222.762C56.5905 220.741 39.9239 232.459 37.3685 234.365C26.4103 242.542 13.4829 251.793 7.37309 243.322C6.39161 241.961 -0.643535 228.101 2.77271 225.694C4.55024 224.441 17.9258 228.25 20.1543 228.374C34.6281 229.178 44.8447 226.426 59.9218 217.211"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p>
          Welcome to Celetel's RCS (Rich Communication Services) page, where we
          explore the exciting world of modern communication. RCS is a
          game-changer in the realm of mobile messaging.
        </p>
        <div className="btn2">
          <button>Request a demo</button>
          <button>Explore</button>
        </div>
      </div>

      <div className="new_image1_h">
        <img src={image1} alt="" />
      </div>

      <div className="main_sol_page11">
        <h1>The Future of Enhanced Communication</h1>
        <p>
          Welcome to Celetel's RCS (Rich Communication Services) page, where we
          explore the exciting world of modern communication. RCS is a
          game-changer in the realm of mobile messaging.
        </p>
        <div className="img_1_new">
          <img src={image1} alt="" />
        </div>
        <div className="btn2_1">
          <button>Request a demo</button>
          <button>Explore</button>
        </div>
      </div>

      <div className="our_goal">
        <div className="goal_para">
          <h1>Why RCS Matters?</h1>
          <p>
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at pretium
          </p>
          <div className="new_1_goal_fea">
            <div className="goal_new_fea">
              <img src={Rcs1} alt="" />
              <div>
                <h4>Redefining Messaging</h4>
                <p style={{ marginTop: "10px" }}>
                  RCS isn't just about texts , its about experience{" "}
                </p>
              </div>
            </div>
            <div className="goal_new_fea">
              <img src={Rcs2} alt="" />
              <div>
                <h4>Engagement Beyond Words</h4>
                <p style={{ marginTop: "10px"}}>
                  Interactive features like suggested responses
                </p>
              </div>
            </div>
            <div className="goal_new_fea">
              <img src={Rcs3} alt="" />
              <div>
                <h4>Universal Accessibility</h4>
                <p style={{ marginTop: "10px" }}>
                  RCS is natively supported on most smartphones
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_goal">
          <img src={image2} alt="" />
        </div>
      </div>

      <div className="why_celetel">
        <img src={image3} alt="" />
        <div className="text_area_1">
          <h2>Why Choose Celetel for RCS</h2>
          <p>
            Celebrate richer engagement with Celetel's RCS solutions. From
            immersive marketing to efficient support, we empower your
            connections. Forge deeper relationships and captivate your audience
            with visually compelling messages and interactive content.
            Experience the future of communication with Celetel
          </p>
        </div>
      </div>

      <div className="unlock_features">
        <h1>Unlock Next Level Messaging with Celetel's</h1>
        <p>Join over 4000+ startups already growing with Untitled</p>
        <div className="btn4">
          <button>Learn more</button>
          <button>Get started</button>
        </div>
      </div>

      <div className="security_rcs_rcs">
        <div className="para_seq">
          <h1>Unlock the RCS Advantage:</h1>
          <p style={{ marginTop: "20px", color: "#8A8A8A", fontWeight: "500" }}>
            Ready to explore the endless possibilities of RCS? Connect with us
            to discuss how Celetel can tailor an RCS strategy that aligns with
            your objectives. Together, we'll elevate your conversations, one
            message at a time.
          </p>
          <div className="btn2_3">
            <button>Get started</button>
            <button>Explore</button>
          </div>
        </div>
        <div className="img_new">
          <img src={image4} alt="" />
        </div>
      </div>

      <div className="according_sms">
        <Accordion sx={{ marginBottom: "15px" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Is there a free trial available?
          </AccordionSummary>
          <AccordionDetails>
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ marginBottom: "15px" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Can I change my plan later?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ marginBottom: "15px" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            What is your cancellation policy?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ marginBottom: "15px" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            Can other info be added to an invoice?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ marginBottom: "15px" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            How does billing work?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ marginBottom: "15px" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            How do I change my account email?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
      <Footer />
    </Fragment>
  );
}
