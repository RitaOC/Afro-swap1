import React from "react";
import Navbar from "./Navbar";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <section id="Contact">
        <div id="contact-card">
          <div className="contact-card-a">
            <h3>Learn More</h3>
            <p className="contact-instruction">
              Step by Step process to effectively Swap Token on Afroswap
            </p>
          </div>

          <div className="listing">
            <ul>
              <li>
                Click on the Swap Token button and connect to your Metamask
                wallet,by clicking on connect wallet button
              </li>
              <li>Ensure your are on the Polygon (Mumbai) network</li>
              <li>
                The slippage tolerance and transaction deadline is set by
                default, but can be changed by clicking on the gear
                icon(Optional)
              </li>
              <li>Click on Swap Tokens</li>
              <li>And thats all,very simple</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
