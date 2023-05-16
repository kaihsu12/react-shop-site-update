import classes from './style/StepProgress.module.css';

function Step(props) {
  return (
    <span className={classes.progressGroup} data-phase={props.phase}>
      <span className={classes.progressIcon}>
        <span className={classes.number}>{props.number}</span>
      </span>
      <span className={classes.status}>{props.status}</span>
    </span>
  );
}

function StepProgress() {
  return (
    <>
      <h2 className={classes.registerTitle}>結帳</h2>
      <section className={classes.progressContainer}>
        <Step phase="address" number="1" status="寄送地址" />
        <span className={classes.progressBar} data-order="1"></span>
        <Step phase="shipping" number="2" status="運送方式" />
        <span class={classes.progressBar} data-order="2"></span>
        <Step phase="credit-card" number="3" status="付款資訊" />
      </section>
    </>
  );
}

export default StepProgress;
