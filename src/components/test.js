import React, { useEffect } from "react";
import "./test.css";

//AOS
import Aos from "aos";
import "aos/dist/aos.css";

function Test() {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "ease" });
  }, []);

  return (
    <div className="foo-container">
      <div className="foo">
        <div className="foo-content">
          <div className="foo-header-contents">
            <div className="foo-header-logo-conatiner">
            </div>
            <div className="nav-bar-icon">
            
            </div>
          </div>
          <div className="foo-content-body">
            <div
              className="foo-content-body-left"
              data-aos="fade-right"
              data-aos-delay="2000"
            >
              <h1>
                Test
              </h1>
            </div>
            <div className="foo-content-body-right">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
