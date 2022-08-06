import React, { useEffect } from 'react';

import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function OnSale() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
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
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <p key={product._id}>{product._id}</p>
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}

    </div>
    // <div>
    //   {state.products.length ? (
    //     <div className="flex-row">
    //       {filterProducts().map((product) => (
    //         <p key={product._id}>{product._id}</p>
    //       ))}
    //     </div>
    //   ) : (
    //     <h3>You haven't added any products yet!</h3>
    //   )}
    // </div>
  );
}

export default OnSale;