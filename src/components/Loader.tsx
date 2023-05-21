import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animation for the loading spinner
const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Wrapper for the loading page
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Styled component for the loading spinner
const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  border-top-color: #222020d8;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingPage: React.FC = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default LoadingPage;
