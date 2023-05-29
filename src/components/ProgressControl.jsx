import classes from './style/ProgressControl.module.css';
import prevArrow from '../svg/prev-arrow.svg';
import nextArrow from '../svg/next-arrow.svg';

function ProgressControl({ onStepControl, onOutput, stepNum }) {
  if (stepNum === 0) {
    return (
      <section className={classes.controlContainer}>
        <section className={classes.buttonGroup} data-phase="address">
          <button
            className={classes.next}
            onClick={onStepControl}
            data-step="next"
          >
            下一步
            <img src={nextArrow} alt="" data-step="next" />
          </button>
        </section>
      </section>
    );
  } else if (stepNum === 1) {
    return (
      <section className={classes.controlContainer}>
        <section className={classes.buttonGroup} data-phase="shipping">
          <button
            className={classes.prev}
            onClick={onStepControl}
            data-step="prev"
          >
            <img src={prevArrow} alt="" data-step="prev" />
            上一步
          </button>
          <button
            className={classes.next}
            onClick={onStepControl}
            data-step="next"
          >
            下一步
            <img src={nextArrow} alt="" data-step="next" />
          </button>
        </section>
      </section>
    );
  } else if (stepNum === 2) {
    return (
      <section className={classes.controlContainer}>
        <section className={classes.buttonGroup} data-phase="credit-card">
          <button
            className={classes.prev}
            onClick={onStepControl}
            data-step="prev"
          >
            <img src={prevArrow} alt="" data-step="prev" />
            上一步
          </button>
          <button className={classes.next} onClick={onOutput}>
            確認下單
          </button>
        </section>
      </section>
    );
  }
}

export default ProgressControl;
