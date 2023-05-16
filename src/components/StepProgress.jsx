import classes from './style/StepProgress.module.css';
import checkedImg from '../svg/checked.svg';

function StepOn({ phase, number, status }) {
  return (
    <span className={classes.progressGroup} data-phase={phase}>
      <span className={classes.progressIcon}>
        <span className={classes.numberOn}>{number}</span>
      </span>
      <span className={classes.status}>{status}</span>
    </span>
  );
}

function StepOff({ phase, number, status }) {
  return (
    <span className={classes.progressGroup} data-phase={phase}>
      <span className={classes.progressIcon}>
        <span className={classes.numberOff}>{number}</span>
      </span>
      <span className={classes.status}>{status}</span>
    </span>
  );
}

function StepFinish({ phase, status }) {
  return (
    <span className={classes.progressGroup} data-phase={phase}>
      <span className={classes.progressIcon}>
        <span className={classes.checkContainer}>
          <img className={classes.checkImg} src={checkedImg} alt="" />
        </span>
      </span>
      <span className={classes.status}>{status}</span>
    </span>
  );
}

function StepProgress({ stepNum }) {
  return (
    <>
      <h2 className={classes.registerTitle}>結帳</h2>
      <section className={classes.progressContainer}>
        {stepNum === 0 && (
          <>
            <StepOn phase="address" number="1" status="寄送地址" />
            <span className={classes.progressBar} data-order="1"></span>
            <StepOff phase="shipping" number="2" status="運送方式" />
            <span class={classes.progressBar} data-order="2"></span>
            <StepOff phase="credit-card" number="3" status="付款資訊" />
          </>
        )}
        {stepNum === 1 && (
          <>
            <StepFinish phase="address" number="1" status="寄送地址" />
            <span className={classes.progressBar} data-order="1"></span>
            <StepOn phase="shipping" number="2" status="運送方式" />
            <span class={classes.progressBar} data-order="2"></span>
            <StepOff phase="credit-card" number="3" status="付款資訊" />
          </>
        )}
        {stepNum === 2 && (
          <>
            <StepFinish phase="address" number="1" status="寄送地址" />
            <span className={classes.progressBar} data-order="1"></span>
            <StepFinish phase="shipping" number="2" status="運送方式" />
            <span class={classes.progressBar} data-order="2"></span>
            <StepOn phase="credit-card" number="3" status="付款資訊" />
          </>
        )}
      </section>
    </>
  );
}

export default StepProgress;
