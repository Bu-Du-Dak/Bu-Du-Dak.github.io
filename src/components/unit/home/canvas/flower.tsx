import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";


// 애니메이션 정의
const fallAnimation = keyframes`
  0% { transform: translateY(-10vh); }
  100% { transform: translateY(100vh); }
`;

const swayAnimation = keyframes`
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
`;

const Blossom = styled.div`
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: pink;
  opacity: 0.5;
  border-radius: 50%;
  pointer-events: none;
  animation: ${fallAnimation} 10s linear, ${swayAnimation} 4s ease-in-out infinite;
`;

const CherryBlossom = () => {
  const [blossoms, setBlossoms] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBlossom = {
        id: Math.random(),
        style: {
          left: `${Math.random() * 100}vw`,
        },
      };
      setBlossoms((prev) => [...prev, newBlossom]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {blossoms.map((blossom) => (
        <Blossom key={blossom.id} style={blossom.style} />
      ))}
    </>
  );
};

export default CherryBlossom;
