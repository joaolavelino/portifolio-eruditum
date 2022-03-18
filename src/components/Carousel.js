import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import ComposerCard from "./ComposerCard";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { LoadingPoints } from "./Loading";

const Carousel = ({ list, isLoading }) => {
  const carouselContent = list;

  const carousel = useRef(null);

  const scrollLeftHandler = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth * 0.9;
  };

  const scrollRIghtHandler = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth * 0.9;
  };

  return (
    <CarouselDiv>
      <HiOutlineChevronLeft
        className=" carousel-left"
        onClick={scrollLeftHandler}
      />
      <HiOutlineChevronRight
        className="carousel-right"
        onClick={scrollRIghtHandler}
      />
      {!isLoading ? (
        <div className="carousel" ref={carousel}>
          {carouselContent.map((composer, index) => (
            <ComposerCard composer={composer} key={index} />
          ))}
        </div>
      ) : (
        <CarouselPlaceholder>
          <LoadingPoints />
        </CarouselPlaceholder>
      )}
    </CarouselDiv>
  );
};

const CarouselDiv = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    width: 60px;
    height: 80px;
    z-index: 2;
    cursor: pointer;
    color: ${({ theme }) => theme.highlight};
    transition: 0.4s;
    :hover {
      transform: scale(1.2);
      color: ${({ theme }) => theme.text};
    }
  }
  .carousel-left {
    left: 0;
  }
  .carousel-right {
    right: 0;
  }

  .carousel {
    position: relative;
    width: calc(100% - 120px);
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding: 10px 0;
    scroll-behavior: smooth;
    align-items: center;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CarouselPlaceholder = styled.div`
  width: 100%;
  max-width: 1440px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Carousel;
