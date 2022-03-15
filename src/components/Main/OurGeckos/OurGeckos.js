import React from 'react';
import ItemCard from './ItemCardGeckos';
import './OurGeckos.scss';
import { geckos } from '../../utils/Data';
import { motion } from 'framer-motion';

const OurGeckos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="geckos">
      <h2>Pod naszą opieką są:</h2>
      <div className="geckos-container">
        {geckos.map((item) => (
          <ItemCard
            name={item.name}
            species={item.species}
            morph={item.morph}
            sex={item.sex}
            imgSrc={item.imgSrc}
            date={item.date}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OurGeckos;
