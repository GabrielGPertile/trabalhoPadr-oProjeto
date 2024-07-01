import { TypeUserDTO } from "src/DTO/typeUser.dto";

// src/typeUser.ts
export class TypeUser
{
  private id: number;
  private name: string;

  get getId(): number 
  {
    return this.id;
  }

  set setId(id: number) 
  {
    this.id = id;
  }

  get getName(): string 
  {
    return this.name;
  }

  set setName(name: string) 
  {
    this.name = name;
  }
}