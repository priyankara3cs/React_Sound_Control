import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./list-pages.css";

import Page1 from "../test.js";
import Page2 from "../load-animation.js";
import Page3 from "./page3.jsx";
import Page4 from "./page4.jsx";
import Page5 from "./page5.jsx";

export default function Chart() {
  const [selectedTab, setSelectedTab] = useState("page1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleKeyDown = (e, tab) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedTab(tab);
    }
  };

  const renderPage = () => {
    switch (selectedTab) {
      case "page1":
        return <Page1 />;
      case "page2":
        return <Page2 />;
      case "page3":
        return <Page3 />;
      case "page4":
        return <Page4 />;
      case "page5":
        return <Page5 />;
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* ...................... */}
      <div className="list-page-container">
        <div className="column column-30">
          <>
            <div>
              <br />
              <div
                className={`conserve-chart-01-text-box-1-opacity ${
                  selectedTab === "page1" ? "selected-text" : ""
                }`}
                onClick={() => handleTabClick("page1")}
                onKeyDown={(e) => handleKeyDown(e, "page1")}
              >
                Page 1
              </div>
              <br />
              <div
                className={`conserve-chart-01-text-box-2-opacity ${
                  selectedTab === "page2" ? "selected-text" : ""
                }`}
                onClick={() => handleTabClick("page2")}
                onKeyDown={(e) => handleKeyDown(e, "page2")}
              >
                Page 2
              </div>
              <br />
              {/* <div
                className={`conserve-chart-01-text-box-3-opacity ${
                  selectedTab === "page3" ? "selected-text" : ""
                }`}
                onClick={() => handleTabClick("page3")}
                onKeyDown={(e) => handleKeyDown(e, "page3")}
              >
                Page 3
              </div>
              <br />
              <div
                className={`conserve-chart-01-text-box-4-opacity ${
                  selectedTab === "page4" ? "selected-text" : ""
                }`}
                onClick={() => handleTabClick("page4")}
                onKeyDown={(e) => handleKeyDown(e, "page4")}
              >
                Page 4
              </div>
              <br />
              <div
                className={`conserve-chart-01-text-box-5-opacity ${
                  selectedTab === "page5" ? "selected-text" : ""
                }`}
                onClick={() => handleTabClick("page5")}
                onKeyDown={(e) => handleKeyDown(e, "page5")}
              >
                Page 5
              </div> */}
            </div>
          </>
        </div>
        <div className="column column-70">
          <>
            <div>{renderPage()}</div>
          </>
        </div>
      </div>
    </div>
  );
}
