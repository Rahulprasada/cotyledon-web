import React from "react";
import styled from "styled-components";
import { FaCaretRight } from "react-icons/fa";

export default function IndustrySlides({ industryTitle, industryDescription }) {
  return (
    <SlideSection>
      <h4>{industryTitle}</h4>
      <p>{industryDescription}</p>
      <a
        href="javascript:void(0)"
        className="read-more"
        aria-label="Read more about the client story"
      >
        Read More <FaCaretRight />
      </a>
    </SlideSection>
  );
}

const SlideSection = styled.section`
  padding: 15px 0;
  margin: 10px 0;
  transition: all 0.8s ease-in;

  h4 {
    font-size: 20px;
    border-bottom: 4px solid grey;
    margin: 10px 0;
    padding: 0 0 16px;
  }

  p {
    font-size: 26 px;
    padding: 0 0 10px;
    font-weight: 700;
    margin: 0 0 10px 0;
  }

  .read-more {
    color: red;
    padding: 10px;
    text-decoration: none; /* Removes underline for better appearance */
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: white; /* Slightly darker shade on hover */
    }
  }
`;
