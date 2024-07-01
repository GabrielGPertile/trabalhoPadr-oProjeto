import { PrismaClient } from "@prisma/client";
import { TypeUserRepository } from "./typeUserRepository";
import { Injectable } from "@nestjs/common";
import { TypeUser } from "src/model/typeUser";

const prisma = new PrismaClient()

@Injectable()
export class TypeUserRepositoryImpl implements TypeUserRepository
{
    async createTypeUser(data: { name: string }): Promise<any> 
    {
        return prisma.typeUser.create({
            data: {
                name: data.name,
            },
        });
    }

    public async findOneById(id: number): Promise<any> 
    {
        return prisma.typeUser.findUnique(
            {
                where: 
                {
                    id_TypeUser: +id,
                }
            }
        )
    }

    public async delete(id: number): Promise<any>
    {
        return prisma.typeUser.delete(
            {
                where: 
                {
                    id_TypeUser: +id,
                }
            }
        )
    }

    public async update(id: number, data: {name: string}): Promise<any>
    {
        return prisma.typeUser.update(
            {
                where: 
                {
                    id_TypeUser: +id,
                },
                data: 
                {
                    name: data.name,
                }
            })
    }

    public async findAll(): Promise<any>
    {
        return prisma.typeUser.findMany({
            orderBy: 
            {
                id_TypeUser: 'asc',
            }
        });
    }
}