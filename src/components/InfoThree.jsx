import classes from './style/InfoThree.module.css';
import { useContext } from 'react';
import { CardContext } from './CardContext';

function InfoThree({ onCardInput }) {
  const cardInfo = useContext(CardContext);
  return (
    <form className={classes.formCredit} data-phase="credit-card">
      <h3 className={classes.formTitle}>付款資訊</h3>
      <section className={classes.formBody}>
        {cardInfo
          .filter(
            (input) => input.label === '持卡人姓名' || input.label === '卡號'
          )
          .map((input) => {
            return (
              <div className={classes.inputLayout} key={input.id}>
                <div className={classes.inputGroup} key={input.id}>
                  <div className={classes.inputLabel}>{input.label}</div>
                  <input
                    className={classes.inputText}
                    type="text"
                    placeholder={input.defaultValue}
                    onChange={(e) => onCardInput?.(e.target.value, input.label)}
                  />
                </div>
              </div>
            );
          })}

        <div className={classes.inputLayout}>
          {cardInfo
            .filter(
              (input) =>
                input.label === '有效期限' || input.label === 'CVC / CCV'
            )
            .map((input) => {
              return (
                <div className={classes.inputGroup} key={input.id}>
                  <div className={classes.inputLabel}>{input.label}</div>
                  <input
                    className={classes.inputText}
                    type="text"
                    placeholder={input.defaultValue}
                    onChange={(e) => onCardInput?.(e.target.value, input.label)}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </form>
  );
}

export default InfoThree;
