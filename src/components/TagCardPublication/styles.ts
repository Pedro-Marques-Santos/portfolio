import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentLanguageAndTitle = styled.div``;

export const Language = styled.div`
  font-size: 15.5px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.02em;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.02em;
`;

export const Arrow = styled.div`
  border: 1px solid red;
  width: 75px;
  // While hovering
  // Change to: "hover=yes";
  // Animate: Smart animate;
  animation-timing-function: ease-out;
  animation-duration: 200ms;

  i {
    border: 1px solid blue;
    margin-left: 50%;
    margin-top: 10px;
    cursor: pointer;
    font-size: 35px;
    :hover {
      animation-timing-function: ease-out;
      animation-duration: 200ms;
    }
  }
`;
