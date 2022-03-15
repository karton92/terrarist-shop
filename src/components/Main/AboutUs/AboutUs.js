import React from 'react';
import './AboutUs.scss';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about">
      <h2>Jak to wszystko się zaczęło?</h2>
      <div className="about-container">
        <div className="about-img-box" />
        <div className="about-content">
          <p className="blockquote">
            "Boimy się tego, czego nie znamy. Jeśli coś jest skryte pod zasłoną ciemności i
            niepewności, jest tajemnicą. Pozwolenie, by światło przedarło się przez tą ciemność
            sprawia, że wszystko staje się jasne."
          </p>
          <p className="text-content">
            <span>Hodowla Valhalla Geckos</span> oficjalnie powstała w grudniu 2020 roku. Od tego
            czasu systematycznie się rozrasta, a ilość podopiecznych i Nasza wiedza na temat
            zwierząt terrarystycznych wciąż rośnie.
            <br />
            <br />
            Pierwsze styczności ze zwierzętami terrarystycznymi miałem już w podstawówce, gdzie na
            specjalnie zorganizowanym dla dzieci pokazie po raz pierwszy w życiu trzymałem na szyi
            dorosłego Boa dusiciela. Być może to właśnie od tego zdarzenia gdzieś głęboko w sercu
            zakiełkowało ziarno z którego wyrosła pasja i miłość do zwierząt terrarystycznych.
            Popularny w tamtych czasach{' '}
            <a rel="noreferrer" target="_blank" href="https://pl.wikipedia.org/wiki/Steve_Irwin">
              Steve Irwin - Łowca Krokodyli
            </a>{' '}
            - będący hitem na kanale Animal Planet, którego uwielbiałem oglądać tylko tą pasję
            wzmocnił.
            <br />
            <br />
            Profesjonalnie terrarystyka zagościła w moim życiu w czasach szkoły średniej i studiów.
            W szczytowym okresie posiadałem około 50 gatunków ptaszników. Z czasem miejsce
            ptaszników zajęły gady, a na chwilę obecną w Naszym domu opiekujemy się gekonami
            orzęsionymi oraz gekonami płaczącymi. Nie jest to jednak nasze ostatnie słowo!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
