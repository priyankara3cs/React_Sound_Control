import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./list-pages.css";

import Page1 from "../test.js";
import Page2 from "../load-animation.js";

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
