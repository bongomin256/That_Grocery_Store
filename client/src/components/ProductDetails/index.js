import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";

import { idbPromise } from "../../utils/helpers";

function ProductDetails() {
  const [state, dispatch] = useStoreContext();
  // const [state, setState] = useState({ products: [] });

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="product">PRODUCT NAME:</label>
          <input
            placeholder="Product Name"
            name="product"
            type="product"
            id="product"
          />
        </div>
        <div>
          <label htmlFor="expirationDate">EXPIRATION DATE:</label>
          <input
            placeholder="Expiration Date"
            name="expirationDate"
            type="expirationDate"
            id="expirationDate"
          />
        </div>
        <div>
          <label htmlFor="quantity">QUANTITY:</label>
          <input
            placeholder="quantity"
            name="quantity"
            type="quantity"
            id="quantity"
          />
        </div>
      </form>
    </div>
  );
}

export default ProductDetails;
