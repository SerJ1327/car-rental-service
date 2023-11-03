import CarItem from 'components/CarItem/CarItem';
import PropTypes from 'prop-types';
import { StyledCarListUl } from './CarList.styled';

const CarList = ({ cars }) => {
  return (
    <StyledCarListUl>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </StyledCarListUl>
  );
};

export default CarList;

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
