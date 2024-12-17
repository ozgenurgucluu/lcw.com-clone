import React from "react";

import CartList from "@/components/CartList";

const CartPage = async () => {
  const cartDetail = await fetch(
    `http://localhost:3001/cart?_embed=product`
  ).then((res) => res.json());
  return <CartList cart={cartDetail} />;
};

export default CartPage;
