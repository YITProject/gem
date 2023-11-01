"use client";
import { useEffect, useState } from "react";
import type { Cart, Product } from "@prisma/client";
import { AvatarAnchor, BaseButton } from "godown/react";
import { css, tagged } from "powerstyl";
// eslint-disable-next-line import/no-named-as-default
import useUserState from "../../state/user";

const I = tagged`i``    
width: 100%;
height: 1.6em;
display: flex;
justify-content: center;
align-items: center;
font-style: normal;
}`;
export default function Test() {
  const userState = useUserState();
  const [carts, setCarts] = useState<(Cart & { Product: Product; })[]>();
  const UpdateCarts = (pid: string, count = 1) => {
    const token = userState.getToken();
    if (token) {
      void fetch("/api/cart", {
        method: "put",
        headers: {
          TOKEN: token
        },
        body: JSON.stringify({
          productID: pid,
          count,
        })
      });
    }
  };
  const ClearCarts = (pid: string) => {
    const token = userState.getToken();
    if (token) {
      void fetch("/api/cart", {
        method: "delete",
        headers: {
          TOKEN: token
        },
        body: JSON.stringify({
          productID: pid,
        })
      });
    }
  };
  const getCart = () => {
    const token = userState.getToken();
    if (token) {
      void fetch("/api/cart", {
        method: "post",
        headers: {
          TOKEN: token
        },
      }).then(res => res.json()).then((fd: (Cart & { Product: Product; })[]) => {
        setCarts(fd);
      });
    }
  };
  const add = (productID: string) => {
    if (!carts) {
      return;
    }
    const matched = carts.find((cart) => cart.productID === productID)!;
    matched.count++;
    setCarts([...carts]);
    UpdateCarts(productID, matched.count);
  };
  const del = (productID: string) => {
    if (!carts) {
      return;
    }
    const matched = carts.find((cart) => cart.productID === productID)!;
    if (matched.count === 1) {
      const updatedCarts = carts.filter((cart) => cart.productID !== productID);
      setCarts([...updatedCarts]);
      ClearCarts(productID);
      return;
    }
    matched.count--;
    setCarts([...carts]);
    UpdateCarts(productID, matched.count);
  };
  useEffect(() => {
    getCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userState]);

  return <div style={css`width: 340px;`}>
    {carts?.map(cart => {
      return <div key={cart.cartID} style={css`margin: 12px;`}>
        <section style={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        `}>
          <AvatarAnchor name={cart.Product.name} src={cart.Product.iconURL} style={css`
            font-size: 2em;
        `} />
          <div>{cart.Product.name}</div>
        </section>
        <section style={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        margin: auto;`}>
          <BaseButton color="red" onClick={() => { del(cart.productID!); }} style={css`width:1.6em;height:1.6em;`}>
            <I>
              -
            </I>
          </BaseButton>
          <div>{cart.count}</div>
          <BaseButton color="blue" onClick={() => { add(cart.productID!); }} style={css`width:1.6em;height:1.6em;`}>
            <I>
              +
            </I>
          </BaseButton>
        </section>
      </div>;
    })}

  </div>;
}