import * as users from "../db/database.json";
import { v4 } from "uuid";
import { writeFile } from 'fs';


let usersArray = JSON.parse(JSON.stringify(users)).default;

interface IUser { 
    id:string,
    username: string,
    age: number,
    hobbies: string[] | []
}

export const findAllUsers = ():Promise<Array<IUser>> => {
    return new Promise((resolve : any, reject) => {
        resolve(usersArray)
    })
}

export const findUser = (id: string):Promise<IUser> => {
    return new Promise((resolve : any, reject) => {
        resolve(usersArray.find((user: IUser) => user.id === id))
    })
}

export const create = (user:any) => {
    return new Promise((resolve, reject) => {
        const newUser = {id: v4(), ...user};
        usersArray.push(newUser);

        writeFile("./src/db/database.json", JSON.stringify(usersArray), 'utf-8', (err) => console.log(err));
        resolve(newUser);
    })
}


export const update = (user:any, id: string) => {
    return new Promise((resolve, reject) => {
        const userIndex = usersArray.findIndex((user:IUser) => user.id === id);

        usersArray[userIndex] = {id, ...user}

        writeFile("./src/db/database.json", JSON.stringify(usersArray), 'utf-8', (err) => console.log(err));
        resolve(usersArray[userIndex]);
    })
}

export const remove = (id: string) => {
    return new Promise((resolve , reject) => {
        usersArray = usersArray.filter(( user:IUser ) => user.id !== id)
        writeFile("./src/db/database.json", JSON.stringify(usersArray), 'utf-8', (err) => console.log(err));
        resolve(usersArray);
    })
}