import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";
// import { generateRazorPayOrderId } from "./order";
// import { env } from "@/lib/env";
// import razorpay from "@/lib/razorpay";
// import Razorpay from "razorpay";

export const metadata = {
  title: "Your Cart",
};

export default async function CartPage() {
  const cart = await getCart();

  // const placeOrder = async () => {
  //   "use server";

  //   const totalAmount: number = (await parseInt(cart?.subtotal)) || 0;
  //   const obj = await generateRazorPayOrderId(parseInt(totalAmount));

  //   const options = {
  //     key: "rzp_test_OtZvIrMy9QK4AL",
  //     name: "mmantratech",
  //     currency: obj?.currency,
  //     amount: obj?.amount,
  //     order_id: obj?.id,
  //     description: "Understanding RazorPay Integration",
  //     // image: logoBase64,
  //     handler: async function (response) {
  //       // if (response.length==0) return <Loading/>;
  //       console.log(response);

  //       const data = await fetch("http://localhost:3000/api/paymentverify", {
  //         method: "POST",
  //         // headers: {
  //         //   // Authorization: 'YOUR_AUTH_HERE'
  //         // },
  //         body: JSON.stringify({
  //           razorpay_payment_id: response.razorpay_payment_id,
  //           razorpay_order_id: response.razorpay_order_id,
  //           razorpay_signature: response.razorpay_signature,
  //         }),
  //       });

  //       const res = await data.json();

  //       console.log("response verify==", res);

  //       // if (res?.message == "success") {
  //       //   console.log("redirected.......");
  //       //   router.push(
  //       //     "/paymentsuccess?paymentid=" + response.razorpay_payment_id,
  //       //   );
  //       // }

  //       // Validate payment at server - using webhooks is a better idea.
  //       // alert(response.razorpay_payment_id);
  //       // alert(response.razorpay_order_id);
  //       // alert(response.razorpay_signature);
  //     },
  //     prefill: {
  //       name: "someone",
  //       email: "someone@gmail.com",
  //       contact: "000000000",
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((item) => (
        <CartEntry
          cartItem={item}
          key={item.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your cart is empty.</p>}

      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <form>
          <button className="btn btn-primary sm:w-[100px]" type="submit">
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
}
