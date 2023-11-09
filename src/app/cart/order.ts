"use server";

import razorpay from "@/lib/razorpay";

interface Opt {
  amount: number;
  currency: string;
  receipt: string;
}

export const generateRazorPayOrderId = async (totalAmount: number) => {
  try {
    if (!totalAmount) throw new Error("Invalid total amount");

    const options: Opt = {
      amount: Math.floor(totalAmount),
      currency: "USD",
      receipt: `receipt-${new Date().getTime()}`,
    };

    const order = await razorpay.orders.create(options);
    console.log(order);

    return order;
  } catch (err: any) {
    console.error(err);
  }
};
