import type { Pizza } from "@prisma/client";
import prisma from "./prisma.db";
import { StatusCodes } from "http-status-codes";

type PizzaWithoutId = Omit<Pizza, "id">;

export class PizzaDb {
  constructor() {}

  static async createPizza(pizza: PizzaWithoutId): Promise<Pizza> {
    const newPizza = await prisma.pizza.create({ data: pizza as Pizza });

    if (!newPizza) {
      throw createError({statusCode: StatusCodes.BAD_REQUEST, statusMessage: "Pizza not created"});
    }

    return newPizza;
  }

  static async editPizza(id: string, pizza: PizzaWithoutId): Promise<Pizza> {
    await this.detailPizza(id);

    const editedPizza = await prisma.pizza.update({
      data: pizza,
      where: { id },
    });

    if (!editedPizza) {
      throw createError({statusCode: StatusCodes.NOT_FOUND, statusMessage:`Pizza with id: ${id} cannot be updated`});
    }

    return editedPizza;
  }

  static async deletedPizza(id: string): Promise<Pizza> {
    await this.detailPizza(id);

    const deletedPizza = await prisma.pizza.delete({ where: { id } });

    return deletedPizza;
  }

  static async detailPizza(id: string): Promise<Pizza> {
    const pizza = await prisma.pizza.findUnique({ where: { id } });

    if (!pizza) {
      throw createError({statusCode: StatusCodes.NOT_FOUND, statusMessage:`Pizza with id: ${id} is not found`});
    }

    return pizza;
  }

  static async getAllPizza(): Promise<Pizza[]> {
    return await prisma.pizza.findMany({});
  }
}
