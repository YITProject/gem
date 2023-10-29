"use client";
import { TypewriterText } from "godown/react";
import { css } from "powerstyl";

export default () => {
  return (
    <div
      style={css`
        margin: auto;
        font-weight: 700;
        font-size: 1.8em;
      `}
    >
      <TypewriterText>404 Not found</TypewriterText>
    </div>
  );
};
