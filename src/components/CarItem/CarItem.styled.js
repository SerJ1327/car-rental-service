import styled from 'styled-components';

const StyledCarItemLi = styled.li`
  width: 274px;
  height: 426px;
  border: 1px solid black;
`;
const StyledImgThumbDiv = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid red;
`;

const StyledCarImg = styled.img`
  object-fit: cover;

  display: block;
  height: 100%;
  width: 100%;
`;

const StyledHeartImg = styled.img`
  position: absolute;
  fill: rgba(255, 255, 255, 0.8);
  color: green;
  background-color: violet;
  stroke: blue;
  border: 1px solid orange;
`;

const StyledCarNameH2 = styled.h2``;

export { StyledCarItemLi, StyledImgThumbDiv, StyledCarImg, StyledHeartImg };
