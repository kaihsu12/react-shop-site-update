import classes from './style/ProgressControl.module.css';
import preArrow from '../svg/prev-arrow.svg';
import nextArrow from '../svg/next-arrow.svg';

function ProgressControl() {
  return (
    <section className={classes.controlContainer}>
      <section class={classes.buttonGroup} data-phase="address">
        <button className={classes.next}>
          下一步
          <img src={nextArrow} alt="" />
        </button>
      </section>
      <section class={classes.buttonGroup} data-phase="shipping">
        <button className={classes.prev}>
          <img src={preArrow} alt="" />
          上一步
        </button>
        <button className={classes.next}>
          下一步
          <img src={nextArrow} alt="" />
        </button>
      </section>
      <section class={classes.buttonGroup} data-phase="credit-card">
        <button className={classes.prev}>
          <img src={preArrow} alt="" />
          上一步
        </button>
        <button className={classes.next}>確認下單</button>
      </section>
    </section>
  );
}

export default ProgressControl;
