import React from "react";
import { Spinner, LoadingWrapper } from "./LoadingSpinner.styled";

const LoadingSpinner: React.FC = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default LoadingSpinner;

// flytta styling till egen komponent
// gör spinner till en egen komponent och importera till nopage
