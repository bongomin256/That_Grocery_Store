import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_USER } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS, QUERY_USER } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function Profile() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data) {
      console.log("Data found: ", data);
      dispatch({
        type: UPDATE_USER,
        user: data.user,
      });

        idbPromise("user", "put", data.user);

    } else if (!loading) {
      idbPromise("user", "get").then((user) => {
        dispatch({
          type: UPDATE_USER,
          user: user,
        });
      });
    }
  }, [data, loading, dispatch]);

  // console.log(data);

  return (
    <div className="my-2">
      <h2>USER:</h2>

        <div className="flex-row">

        {/* <p>Email:{state.user.email}</p> */}

        </div>

    </div>
  );
}

export default Profile;
