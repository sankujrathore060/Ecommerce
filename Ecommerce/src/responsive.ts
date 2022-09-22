import { css, FlattenSimpleInterpolation } from "styled-components";

export const mobile = (props: any): FlattenSimpleInterpolation => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};
