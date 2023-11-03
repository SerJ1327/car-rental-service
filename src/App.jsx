import { Route, Routes } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritesPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
};
export default App;
