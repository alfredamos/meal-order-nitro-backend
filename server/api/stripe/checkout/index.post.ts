import { OrderPayload } from "~~/models/orders/orderPayload.model";
import { stripePaymentCheckout } from "~~/utils/actions/stripe.action";

export default defineEventHandler(async(event) => {
  //----> Check for admin privilege
  const body = await readBody<OrderPayload>(event);

  const response = await stripePaymentCheckout(body);

  return response; 
});