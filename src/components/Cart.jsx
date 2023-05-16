import { useImmer } from 'use-immer';
import classes from './style/Cart.module.css';
import PlusSign from '../svg/plus.svg';
import MinusSign from '../svg/minus.svg';

const itemData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

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

function Cart() {
  const [items, updateItems] = useImmer(itemData);

  function handleQuantity(e) {
    if (e.target.dataset.counter === 'plus') {
      updateItems((draft) => {
        const itemOne = draft.find((t) => t.id === e.target.dataset.count);
        itemOne.quantity++;
      });
    } else if (e.target.dataset.counter === 'minus') {
      updateItems((items) => {
        const itemOne = items.find((t) => t.id === e.target.dataset.count);
        const index = items.findIndex((t) => t.id === e.target.dataset.count);
        itemOne.quantity > 0 && itemOne.quantity--;
        itemOne.quantity === 0 && items.splice(index, 1);
      });
    }
  }

  const priceSum = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <section className={classes.cartContainer}>
      <h3 className={classes.cartTitle}>購物籃</h3>

      <section className={classes.productList} data-total-price="0">
        <Items renderItems={itemData} />
      </section>

      <section className={classes.cartInfo}>
        <div class="text">運費</div>
        <div class="price">免費</div>
      </section>
      <section className={classes.cartInfo}>
        <div class="text">小計</div>
        <div class="price">${priceSum}</div>
      </section>
    </section>
  );
}

export default Cart;
