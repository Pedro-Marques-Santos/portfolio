import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;

  i {
    margin-left: 5px;
    display: flex;
    font-size: 18px;
    padding-top: 3px;
  }
`;

export const Title = styled.div`
  color: #2d2e32;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const InformationProject = styled.div`
  color: #2f2f2f;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 17px;
`;

export const MyLinguages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const Linguages = styled.div`
  padding: 4px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Mulish;
  font-weight: 600;
  text-decoration: underline;
`;

export const LinksIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  margin-top: 40px;
`;

export const LinkIcon = styled.a`
  display: flex;
  cursor: pointer;
  color: #2d2e32;
  text-decoration: none;

  transition: 0.4s;
  :hover {
    color: #147efb;
  }
`;

export const TitleLinkIcon = styled.div`
  font-size: 19px;
  font-family: Mulish;
  font-weight: 600;
`;

export const IconLink = styled.div`
  margin-left: 4px;
  font-size: 25px;
  display: flex;
  align-items: center;
`;
