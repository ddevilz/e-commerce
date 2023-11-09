import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto";
import { env } from "@/lib/env";
import razorpay from "@/lib/razorpay";

export async function POST(req: any, res: any) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await req.json();
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  console.log("id==", body);

  const expectedSignature = crypto
    .createHmac("sha256", env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    return NextResponse.json(
      {
        message: "success",
      },
      {
        status: 200,
      },
    );
  } else {
    return NextResponse.json(
      {
        message: "fail",
      },
      {
        status: 400,
      },
    );
  }
}
