import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 320px;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    -webkit-animation: morph 8s ease-in-out infinite;
    animation: morph 8s ease-in-out infinite;
    transition: all 1s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    @keyframes morph {
      0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
      50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      }
      100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    order: 1;
    padding-left: 3px;
    padding-right: 3px;
  }
`;
