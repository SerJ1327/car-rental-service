import { PropTypes } from 'prop-types';
import {
  StyledCarImg,
  StyledCarItemLi,
  StyledHeartImg,
  StyledImgThumbDiv,
} from './CarItem.styled.js';
import heart from '../../icons/heart.svg';

// const icon = heart => heart;

const CarItem = ({ car }) => {
  const {
    year,
    make,
    model,
    img,
    description,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;

  return (
    <StyledCarItemLi>
      <StyledImgThumbDiv>
        <StyledCarImg src={img} alt={description} />
        {/* <button type="button"> */}
        <StyledHeartImg src={heart} alt="heart" style={{ stroke: 'blue' }} />
        {/* </button> */}
      </StyledImgThumbDiv>
      <div>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
      </div>
      <div>{address}</div>
      <div>{rentalCompany} </div>
      <div></div>
      <div>{type}</div>
      <div>{mileage}</div>
      <div>{functionalities[0]}</div>
    </StyledCarItemLi>
  );
};

export default CarItem;

CarItem.propTypes = { car: PropTypes.object };
