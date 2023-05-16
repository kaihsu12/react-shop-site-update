import classes from './style/InfoThree.module.css';

function InfoThree() {
  return (
    <form className={classes.formCredit} data-phase="credit-card">
      <h3 className={classes.formTitle}>付款資訊</h3>
      <section className={classes.formBody}>
        <div className={classes.inputLayout}>
          <div className={classes.inputGroup}>
            <div className={classes.inputLabel}>持卡人姓名</div>
            <input
              className={classes.inputText}
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className={classes.inputLayout}>
          <div className={classes.inputGroup}>
            <div className={classes.inputLabel}>卡號</div>
            <input
              className={classes.inputText}
              type="text"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>
        <div className={classes.inputLayout}>
          <div className={classes.inputGroup}>
            <div className={classes.inputLabel}>有效期限</div>
            <input
              className={classes.inputText}
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className={classes.inputGroup}>
            <div className={classes.inputLabel}>CVC / CCV</div>
            <input
              className={classes.inputText}
              type="text"
              placeholder="123"
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default InfoThree;
