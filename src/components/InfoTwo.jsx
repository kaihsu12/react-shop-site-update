import classes from './style/InfoTwo.module.css';

function InfoTwo() {
  return (
    <form className={classes.formShipping} data-phase="shipping">
      <h3 className={classes.formTitle}>運送方式</h3>
      <section className={classes.formBody}>
        <label className={classes.radioGroup} data-price="0">
          <input id="shipping-standard" type="radio" name="shipping" checked />
          <div className={classes.radioInfo}>
            <div className="col col-12">
              <div className={classes.text}>標準運送</div>
              <div className="price"></div>
            </div>
            <div className={classes.period}>約 3~7 個工作天</div>
          </div>
          <div className="radio-box-border"></div>
        </label>
        <label className={classes.radioGroup} data-price="500">
          <input id="shipping-dhl" type="radio" name="shipping" />
          <div className={classes.radioInfo}>
            <div className="col col-12">
              <div className={classes.text}>DHL 貨運</div>
              <div className="price"></div>
            </div>
            <div className={classes.period}>48 小時內送達</div>
          </div>
          <div className="radio-box-border"></div>
        </label>
      </section>
    </form>
  );
}

export default InfoTwo;
