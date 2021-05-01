import {Permission} from "./permission";
export class Role{
  constructor(
    public id:number,
    public name:string,
    public permissions:Permission[]
  ){}
}