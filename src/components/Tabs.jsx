/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import styled from "styled-components";
import { v } from "../styles/Variables";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <Container>
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab_item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 8px;

  .heading {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;

    .tab_item {
      display: inline-block;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      color: ${(props) => props.theme.text};
      background: ${(props) => props.theme.bg};
    }

    .active {
      /* border-color: #000; */
      background: #1b1b1b26;
      color: ${(props) => props.theme.bg4};
    }
  }

  .content {
    padding: 20px 10px;
    /* height: 100vh; */
    overflow: auto;
    /* background-color: #fff; */
    /* text-align: center; */
  }
`;
