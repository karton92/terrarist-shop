import './Main.scss';
import Store from './Store/Store';
import OurGeckos from './OurGeckos/OurGeckos';
import Informations from './Informations/Informations';
import AboutUs from './AboutUs/AboutUs';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sectionValue } from '../../redux/features/sectionSlice';
import Page404 from './Page404';
import { AnimatePresence } from 'framer-motion';

function Main() {
  const activePath = useSelector(sectionValue);

  return (
    <main className="main" id="main">
      <AnimatePresence>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Navigate replace to={`/${activePath}`} />} />
          <Route path="/shop" element={<Store />} />
          <Route path="/geckos" element={<OurGeckos />} />
          <Route path="/informations" element={<Informations />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default Main;
