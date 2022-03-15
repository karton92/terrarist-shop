import React, { useState } from 'react';
import './Store.scss';
import Banner from './Banner/Banner';
import SubMenuContainer from './StoreContent/SubMenuContainer';
import Cart from './Cart/Cart';
import MenuRowContainer from './StoreContent/MenuRowContainer';
import ItemsContainer from './StoreContent/ItemsContainer';
import { motion } from 'framer-motion';

const Store = () => {
  const [view, setView] = useState(false);
  const [active, setActive] = useState(1);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="store">
      <div className="main-container">
        {/* BANNER PANEL */}
        <Banner name={'Wiosenne zwierzo-branie!'} discount={'100'} more={'#'} />

        {/* STORE MENU CATEGORY & STORE ITEMS PANEL */}
        <SubMenuContainer view={view} setView={setView} />
        <MenuRowContainer view={view} setView={setView} active={active} setActive={setActive} />
        <ItemsContainer active={active} />
      </div>

      {/* RIGHT CART PANEL */}
      <Cart />
    </motion.div>
  );
};

export default Store;
