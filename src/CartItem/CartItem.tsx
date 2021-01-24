import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styled";

type Props = {
  item: CartItemType;
  addToCart: (clickdItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className='information'>
          <p>Price {item.price * 100}円</p>
          <p>Total:{(item.amount * item.price * 100).toFixed(0)}円</p>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
