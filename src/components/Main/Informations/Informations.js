import React from 'react';
import './Informations.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { geckoInfo } from '../../utils/Data';
import { motion } from 'framer-motion';

const Informations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="informations">
      <h2>Wiedza w pigułce</h2>
      <figure className="info-img-box">
        <img
          src="https://content.r9cdn.net/rimg/dimg/42/73/d6b825bb-city-44359-163fa64628e.jpg?crop=true&width=1366&height=768&xhint=2564&yhint=1732"
          alt="Ise of Pins"
          title="logo"
        />
        <p>Tak wygląda Isle of Pins - naturalne środowisko gekona orzęsionego.</p>
      </figure>
      <div className="info-accordion">
        {geckoInfo.map((item) => (
          <Accordion>
            <AccordionSummary
              key={item.id}
              className="acc-summary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="acc-details">
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </motion.div>
  );
};

export default Informations;
