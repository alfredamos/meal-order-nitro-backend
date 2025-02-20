import { orderShippedAction } from "~~/utils/actions/order.action";

export default defineEventHandler(async (event) => {
  const orderId = getRouterParam(event, 'orderId');

  const response = await orderShippedAction(orderId);

  return response;
})