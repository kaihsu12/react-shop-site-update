import classes from './style/Cart.module.css';
import PlusSign from '../svg/plus.svg';
import MinusSign from '../svg/minus.svg';
import { CartContext } from './CartContext';
import { useContext } from 'react';

function Items({ renderItems, onCounter }) {
  return renderItems.map((item) => {
    return (
      <div
        key={item.id}
        className={classes.productContainer}
        data-count={item.id}
        data-price={item.price}
        onClick={onCounter}
      >
        <img className={classes.itemPic} src={item.img} alt="" />
        <div className={classes.productInfo}>
          <div className={classes.productName}>{item.name}</div>
          <div className={classes.productQuantity}>
            <div className={classes.productControl}>
              <img
                src={MinusSign}
                alt=""
                data-count={item.id}
                data-counter="minus"
              />
              <span className={classes.productCount}>{item.quantity}</span>
              <img
                src={PlusSign}
                alt=""
                data-count={item.id}
                data-counter="plus"
              />
            </div>
          </div>
          <div className={classes.price}>${item.price}</div>
        </div>
      </div>
    );
  });
}

function Cart({ onCounter, sumPrice }) {
  const cartItems = useContext(CartContext);

  return (
    <section className={classes.cartContainer}>
      <h3 className={classes.cartTitle}>購物籃</h3>

      <section className={classes.productList} data-total-price="0">
        <Items renderItems={cartItems} onCounter={onCounter} />
      </section>

      <section className={classes.cartInfo}>
        <div class="text">運費</div>
        <div class="price">免費</div>
      </section>
      <section className={classes.cartInfo}>
        <div class="text">小計</div>
        <div class="price">${sumPrice}</div>
      </section>
    </section>
  );
}

export default Cart;
