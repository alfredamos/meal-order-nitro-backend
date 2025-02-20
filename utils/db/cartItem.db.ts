import { StatusCodes } from "http-status-codes";
import prisma from "./prisma.db";
import {type CartItem } from "@prisma/client";

type CartItemWithoutId = Omit<CartItem, "id">;

export class CartItemDb {
  constructor() {}

  static async createCartItem(cartItem: CartItem): Promise<CartItem> {
    const newCartItem = await prisma.cartItem.create({ data: cartItem });

    if (!newCartItem) {
      throw createError({statusCode: StatusCodes.BAD_REQUEST, statusMessage: "CartItem not created"});
    }

    return newCartItem;
  }

  static async editCartItem(id: string, cartItem: CartItemWithoutId): Promise<CartItem> {
    await this.detailCartItem(id);

    const editedCartItem = await prisma.cartItem.update({
      data: cartItem,
      where: { id },
    });

    if (!editedCartItem) {
      throw createError({statusCode: StatusCodes.BAD_REQUEST,statusMessage:`CartItem with id: ${id} cannot be updated`});
    }

    return editedCartItem;
  }

  static async deletedCartItem(id: string): Promise<CartItem> {
    await this.detailCartItem(id);

    const deletedCartItem = await prisma.cartItem.delete({ where: { id } });

    return deletedCartItem;
  }

  static async detailCartItem(id: string): Promise<CartItem> {
    const cartItem = await prisma.cartItem.findUnique({ where: { id } });

    if (!cartItem) {
      throw createError({statusCode: StatusCodes.NOT_FOUND, statusMessage:`CartItem with id: ${id} is not found`});
    }

    return cartItem;
  }

  static async getAllCartItems(): Promise<CartItem[]> {
    return await prisma.cartItem.findMany({});
  }
}
