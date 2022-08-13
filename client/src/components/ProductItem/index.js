import React from "react";
import { Link } from "react-router-dom";
import pluralize from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { _id, name, description, expirationDate, image, price, quantity, category, user } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="d-flex row custom_card">
        <div className="d-flex row justify-content-center align-items-center col-5">
          <img src={image} style={{ height: "150px", width: "200px"}}></img>
        </div>
      <div className="row col-7 justify-content-center align-items-center align-text-center">
        <div className="text_2">
          {name} 
        </div>
        <p className="text_1">
          "{description}"
        </p>
        <div>
          <span className="text_3">Expires:</span> {expirationDate} with <span className="text_3">{quantity} {pluralize("item", quantity)}</span> in stock
        </div>
        <div>
          {category} 
        </div>
        <br></br>
        <div>
          Sold by: {user} 
        </div>
        <br></br>
      </div>
      <button className="fakeButton extra_padding_top" onClick={addToCart}>Add to cart (${price}) </button>
    </div>
  );
}

export default ProductItem;
