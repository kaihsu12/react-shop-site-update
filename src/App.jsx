import { useState } from 'react';
import classes from './App.module.css';
import StepProgress from './components/StepProgress';
import InfoOne from './components/InfoOne';
import InfoTwo from './components/InfoTwo';
import InfoThree from './components/InfoThree';
import ProgressControl from './components/ProgressControl';
import Cart from './components/Cart';

function App() {
  const [step, setStep] = useState(0);

  function handleBtnControl(e) {
    e.preventDefault();
    if (e.target.dataset.step === 'next') {
      setStep(step + 1);
    } else if (e.target.dataset.step === 'prev') {
      setStep(step - 1);
    }
  }

  return (
    <>
      <main className={classes.siteMain}>
        <div className={classes.mainContainer}>
          <section className={classes.registerContainer}>
            <StepProgress stepNum={step} />
            <section className={classes.formContainer}>
              {step === 0 && <InfoOne />}
              {step === 1 && <InfoTwo />}
              {step === 2 && <InfoThree />}
            </section>
          </section>
          <div className={classes.itemsContainer}>
            <Cart />
          </div>
          <div className={classes.progressPanel}>
            <ProgressControl onStepControl={handleBtnControl} stepNum={step} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
