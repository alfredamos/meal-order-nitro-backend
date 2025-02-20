import type { Order, CartItem } from "@prisma/client";

export class OrderProduct{
    order!: Order;
    cartItems: CartItem[] = [];
}