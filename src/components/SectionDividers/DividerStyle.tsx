import styled from "styled-components";

const DividerHeader = styled.div`
  width: 100%;
  background-image: linear-gradient(#ffffff, #333333);
  height: 12px;
  opacity: 50%;
`;

const DividerFooter = styled.img`
  width: 100%;
  max-height: 50px;
  z-index: 10;
`;

const DividerMargin = styled.div`
  display: flex;
  margin-top: ${props => props.theme.margin}px;
`;

const DividerContent = styled.div`
  display: flex;
  padding-top: calc(${props => props.theme.margin}px * -1);
  ${props => (props.theme.main ? `background:${props.theme.main};` : "")}
  ${props =>
    props.theme.mainImage ? `background-image: ${props.theme.mainImage};` : ""}
  z-index: ${props => props.theme.zindex};
  flex-direction: column;
  align-items: center;
`;

const WhiteDividerContent = styled.div`
  display: flex;
`;

const SectionTitle = styled.div`
  font-family: parisplus-std, sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const SectionContent = styled.div`
  font-style: normal;
  font-weight: 400;
`;

const Divider = styled.section`
  display: flex;
  flex-direction: column;
`;

const DividerTitleWrapper = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 2vw;
  background-color: #080821;
`;

const DividerTitleImage = styled.img`
  width: 25%;
  z-index: 10;
  @media (max-width: 900px) {
    width: 50%;
  }
`;

const DividerTitleText = styled.div`
  position: absolute;
  font-size: 2.7vw;
  font-family: Poppins;
  font-weight: 700;
  max-width: 25vw;
  top: ${props => props.theme.topOffset}%;
  left: ${props => props.theme.leftOffset}%;
  @media (max-width: 900px) {
    font-size: 5vw;
    top: ${props => props.theme.topOffset+4}%;
    left: ${props => props.theme.title == "FAQ" ? props.theme.leftOffset-1 : props.theme.leftOffset-5}%;
  }
`;

export {
  Divider,
  DividerHeader,
  DividerContent,
  DividerFooter,
  DividerMargin,
  SectionTitle,
  SectionContent,
  WhiteDividerContent,
  DividerTitleWrapper,
  DividerTitleImage,
  DividerTitleText
};
