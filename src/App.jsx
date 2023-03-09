import { useState } from "react";
import { motion } from "framer-motion";

import cart from "./img/web_close.svg";
import open from "./img/web_open.svg";

import Confeti from './component/Confeti'

function App() {
  const [click, setClick] = useState(false);
  const [finish, setFinish] = useState(false);
  const [clickCart, setClickCart] = useState(false);
  const [cartSelect, setCartSelect] = useState([false, false, false, false]);
  const [showConfetti, setShowConfetti] = useState(false)

  function handleClickCart(e) {
    let value = e.target.classList[1];
    let nuevoArray = Array(cartSelect.length).fill(false);
    nuevoArray[value] = true;
    setCartSelect(nuevoArray);
    setClickCart(true);
  }

  function handleClick() {
    setClick(true);
    setTimeout(() => {
      setShowConfetti(true);
    }, 900);
  }
  function handleFinish() {
    setFinish(true);
  }

  const cartSelected = {
    true: {
      y: cartSelect[0] || cartSelect[2] ? -250 : -275,
      width: "250px",
      position: "absolute",
      x: -20,
    },
    false: {
      y: 0,
      x: 0,
      position: "static",
      width: "40px",
    },
  };

  const variant = {
    scale: {
      scale: [1, 0.2, 1],
    },
    noScale: {
      scale: 1,
    },
  };

  const display = {
    none: {
      display: "none",
    },
    block: {
      display: "block",
    },
  };

  const desaparecer1 = {
    true: {
      display: "none",
    },
    false: {
      display: "inline",
    },
  };

  const desaparecer2 = {
    true: {
      display: "none",
    },
    false: {
      display: "block",
    },
  };

  return (
    <main className="main">
      <motion.figure
        initial={{ scale: 1 }}
        animate={click ? "scale" : "noScale"}
        transition={{ duration: 0.9 }}
        className={click ? "figure" : "figure temblor"}
        variants={variant}
        onAnimationComplete={click ? handleFinish : NaN}
      >
        <motion.img
          src={cart}
          alt=""
          className="figure__cart"
          onClick={handleClick}
          animate={finish ? "none" : NaN}
          variants={display}
          transition={{ delay: 0 }}
        />

        {finish && (
          <motion.div
            className="figure__openAll"
            animate={{ display: "block" }}
            transition={{ duration: 2 }}
          >
            <img src={open} alt="" className="figure__open" />

            <div className="container">
              <motion.div
                className="container__container-g 0"
                onClick={handleClickCart}
                animate={clickCart && cartSelect[0] ? "true" : NaN}
                variants={cartSelected}
                transition={{ duration: 0.2 }}
              >
                <span className="container__g 0">g</span>
                <motion.span
                  className="container__resto"
                  initial={{ display: "none" }}
                  animate={clickCart && cartSelect[0] ? "false" : "true"}
                  variants={desaparecer1}
                  transition={{ delay: 0.05 }}
                >
                  raceful
                </motion.span>
                <motion.p
                  className="container__description"
                  initial={{ display: "none" }}
                  animate={clickCart && cartSelect[0] ? "false" : "true"}
                  variants={desaparecer2}
                  transition={{ delay: 0.05 }}
                >
                  Eres una persona muy divertida, siempre me sacas una sonrrisa.
                </motion.p>
              </motion.div>
              <motion.div
                className="container__container-i 1"
                onClick={handleClickCart}
                animate={clickCart && cartSelect[1] ? "true" : NaN}
                variants={cartSelected}
                transition={{ duration: 0.2 }}
              >
                <span className="container__i 1">i</span>
                <motion.span
                  className="container__resto"
                  initial={{ display: "none" }}
                  animate={clickCart && cartSelect[1] ? "false" : "true"}
                  variants={desaparecer1}
                  transition={{ delay: 0.05 }}
                >
                  nspiring
                </motion.span>
                <motion.p
                  className="container__description"
                  initial={{ display: "none" }}
                  animate={clickCart && cartSelect[1] ? "false" : "true"}
                  variants={desaparecer2}
                  transition={{ delay: 0.05 }}
                >
                  Tienes el potencial para causar un efecto positivo en las demás personas.
                </motion.p>
              </motion.div>
              <motion.div
                className="container__container-r 2"
                onClick={handleClickCart}
                animate={clickCart && cartSelect[2] ? "true" : NaN}
                variants={cartSelected}
                transition={{ duration: 0.2 }}
              >
                <span className="container__r 2">r</span>
                <motion.span
                  className="container__resto"
                  initial={{ display: "none" }}
                  animate={clickCart && cartSelect[2] ? "false" : "true"}
                  variants={desaparecer1}
                  transition={{ delay: 0.05 }}
                >
                  adiant
                </motion.span>
                <motion.p
                  className="container__description"
                  initial={{ display: "none" }}
                  animate={clickCart && cartSelect[2] ? "false" : "true"}
                  variants={desaparecer2}
                  transition={{ delay: 0.05 }}
                >
                  Atraes a los demás con tu energía positiva y tu alegría es muy contagiosa.
                </motion.p>
              </motion.div>
              <motion.div
                className="container__container-l 3"
                onClick={handleClickCart}
                animate={clickCart && cartSelect[3] ? "true" : NaN}
                variants={cartSelected}
                transition={{ duration: 0.2 }}
              >
                <span className="container__l 3">l</span>
                <motion.span
                  className="container__resto"
                  initial={{ display: "none" }}
                  animate={clickCart && cartSelect[3] ? "false" : "true"}
                  variants={desaparecer1}
                  transition={{ delay: 0.05 }}
                >
                  oving
                </motion.span>
                <motion.p
                  className="container__description"
                  initial={{ display: "none" }}
                  animate={clickCart && cartSelect[3] ? "false" : "true"}
                  variants={desaparecer2}
                  transition={{ delay: 0.05 }}
                >
                  Irradias amor y cariño a todos los que te rodean.
                </motion.p>
              </motion.div>
            </div>
            <div className="container__bot"></div>
            <div className="container__left"></div>
            <div className="container__right"></div>
          </motion.div>
        )}
      </motion.figure>
      {showConfetti && <Confeti/>}
    </main>
  );
}

export default App;
