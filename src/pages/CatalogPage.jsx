import CarList from 'components/CarList/CarList';
import CarsDataList from '../components/carsDataList.json';

const CatalogPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('e: ', e);
  };
  console.log('CarsDataList: ', CarsDataList);

  const filteredCars = CarsDataList;

  return (
    <>
      <p> Catalog page</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="make" minLength={2} />
        <input type="numver" name="rentalPrice" />
        <input type="number" name="mileage" />
        <button type="submit">Search</button>
      </form>
      <div>
        <CarList cars={filteredCars} />
      </div>
    </>
  );
};

export default CatalogPage;
