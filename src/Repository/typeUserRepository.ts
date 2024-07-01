import { TypeUser } from "@prisma/client";

export interface TypeUserRepository
{
    createTypeUser(data: { name: string }): Promise<any>;
    findAll(): Promise<any>;
    findOneById(id: number): Promise<any>;
    update(id: number, data: {name: string}): Promise<any>;
    delete(id: number): Promise<any>;
}