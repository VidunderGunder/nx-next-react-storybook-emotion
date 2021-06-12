import { css } from "@emotion/react";

/* eslint-disable-next-line */
export interface PhormixProps {}

export default Phormix;
export function Phormix(props: PhormixProps) {
  return (
    <>
      <h1>Welcome to phormix!</h1>
      <div
        css={css`
          background-color: hotpink;
        `}
      >
        <p>This has a hotpink background.</p>
      </div>
    </>
  );
}
