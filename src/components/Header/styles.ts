import styled from "styled-components";

export const Home = styled.div`
  color: var(--black);
  width: 100%;
  box-shadow: 0px 1px 6px 0px #0000001a;
  display: flex;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;

export const Menu = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Tag = styled.div`
  padding-left: 8px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.05em;
  text-align: left;
`;

export const Pages = styled.div`
  padding-right: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;

  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const PagesBar = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const ProgessBar = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 500px) {
    display: flex;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    i {
      font-size: 23px;
      color: gray;
    }
  }
`;

interface MenuBarProps {
  stateProgessBar: boolean;
}

export const MenuBar = styled.div<MenuBarProps>`
  display: none;
  @media (max-width: 500px) {
    display: ${(props) => (props.stateProgessBar === true ? "block" : "none")};
  }
`;

export const Item = styled.div`
  cursor: pointer;
  margin-right: 40px;
  :nth-child(3) {
    margin-right: 0;
  }
  @media (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 8px;
  }
`;
