import { orderDeliveredAction } from "~~/utils/actions/order.action";

export default defineEventHandler(async (event) => {
  const orderId = getRouterParam(event, 'orderId');

  const response = await orderDeliveredAction(orderId);

  return response;
})