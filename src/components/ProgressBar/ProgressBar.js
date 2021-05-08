/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: { height: 12, radius: 4, padding: 0 },
  large: { height: 16, radius: 8, padding: 4 },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`${size} is not available`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--border-radius": styles.radius + "px",
      }}
    >
      <BarWrapper>
        <VisuallyHidden>{value}</VisuallyHidden>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        ></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--border-radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
