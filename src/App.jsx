import { useContext, useState } from 'react';
import { useImmer } from 'use-immer';
import classes from './App.module.css';
import StepProgress from './components/StepProgress';
import InfoOne from './components/InfoOne';
import InfoTwo from './components/InfoTwo';
import InfoThree from './components/InfoThree';
import ProgressControl from './components/ProgressControl';
import Cart from './components/Cart';
import { CartContext } from './components/CartContext';
import { CardContext } from './components/CardContext';

function App() {
  const [step, setStep] = useState(0);
  const items = useContext(CartContext);
  const [cartItems, setCartItems] = useImmer(items);
  const cardDetail = useContext(CardContext);
  const [cardInfo, setCardInfo] = useState(cardDetail);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handleBtnControl(e) {
    e.preventDefault();
    if (e.target.dataset.step === 'next') {
      setStep(step + 1);
    } else if (e.target.dataset.step === 'prev') {
      setStep(step - 1);
    }
  }

  function handleQuantity(e) {
    if (e.target.dataset.counter === 'plus') {
      setCartItems((items) => {
        const itemOne = items.find((t) => t.id === e.target.dataset.count);
        itemOne.quantity++;
      });
    } else if (e.target.dataset.counter === 'minus') {
      setCartItems((items) => {
        const itemOne = items.find((t) => t.id === e.target.dataset.count);
        const index = items.findIndex((t) => t.id === e.target.dataset.count);
        itemOne.quantity > 0 && itemOne.quantity--;
        itemOne.quantity === 0 && items.splice(index, 1);
      });
    }
  }

  function handleCardInput(value, label) {
    setCardInfo((prevInput) => {
      return prevInput.map((input) => {
        if (input.label === label) {
          return {
            ...input,
            inputValue: value,
          };
        }
        return input;
      });
    });
  }

  function handleInfoOutput() {
    cardInfo.map((input) => console.log(`${input.label}: ${input.inputValue}`));
    console.log(`購物車總金額：${totalPrice}`);
  }

  return (
    <>
      <main className={classes.siteMain}>
        <div className={classes.mainContainer}>
          <section className={classes.registerContainer}>
            <StepProgress stepNum={step} />
            <CardContext.Provider value={cardInfo}>
              <section className={classes.formContainer}>
                {step === 0 && <InfoOne />}
                {step === 1 && <InfoTwo />}
                {step === 2 && <InfoThree onCardInput={handleCardInput} />}
              </section>
            </CardContext.Provider>
          </section>
          <CartContext.Provider value={cartItems}>
            <div className={classes.itemsContainer}>
              <Cart onCounter={handleQuantity} sumPrice={totalPrice} />
            </div>
          </CartContext.Provider>
          <div className={classes.progressPanel}>
            <ProgressControl
              onStepControl={handleBtnControl}
              onOutput={handleInfoOutput}
              stepNum={step}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
