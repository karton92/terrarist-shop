import './Main.scss';
import Store from './Store/Store';
import OurGeckos from './OurGeckos/OurGeckos';
import Informations from './Informations/Informations';
import AboutUs from './AboutUs/AboutUs';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sectionValue } from '../../redux/features/sectionSlice';

function Main() {
  const activePath = useSelector(sectionValue);

  return (
    <main className="main" id="main">
      <Routes>
        <Route path="/" element={<Navigate replace to={`/${activePath}`} />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/geckos" element={<OurGeckos />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </main>
  );
}

export default Main;
