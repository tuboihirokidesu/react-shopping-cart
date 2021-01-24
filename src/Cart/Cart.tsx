import { CartItemType } from "../App";
import { Wrapper } from "../App.styles";
import CartItem from "../CartItem/CartItem";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const caluculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No item in Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total : {(caluculateTotal(cartItems) * 100).toFixed(0)}円</h2>
    </Wrapper>
  );
};

export default Cart;
