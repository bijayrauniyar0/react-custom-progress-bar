import React from "react";
import styled, { keyframes } from "styled-components";

interface ProgressBarProps {
  progress: number;
  barColor?: string;
  backgroundColor?: string;
  height?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  barColor = "#00b7ff",
  backgroundColor = "#e9e9e9",
  height = "0.75rem",
}) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.max(0, Math.min(progress, 100));
  const loading = keyframes`
    0% {
      width: 0;
      background: #ffffff6b;
    }
    100% {
      width: 100%;
      background: #ffffff6b;
    }
  `;
  const completed = keyframes`
  0% {
      opacity: 0;
      background: #ffffff6b;
    }
    50% {
      opacity: 1;
      background: #e4e4e4c5;
    }
    100% {
      opacity: 0;
      background: #ffffff6b;
    }`;

  const ProgressDiv = styled.div`
    width: 100%;
    height: ${height};
    animation: ${progress === 100 ? completed : loading} 2s infinite ease-in-out;
  `;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: backgroundColor,
        borderRadius: "4rem",
        height: height,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: barColor,
          height: "100%",
          transition: "width 0.3s ease-in-out",
        }}
      >
        {/* <div
          style={{
            width: "100%",
            height: height,
            animation:
              progress === 100
                ? "completed 1s infinite ease"
                : "loading 2s infinite ease-in-out",
          }}
        /> */}
        <ProgressDiv />
      </div>
    </div>
  );
};

export default ProgressBar;
