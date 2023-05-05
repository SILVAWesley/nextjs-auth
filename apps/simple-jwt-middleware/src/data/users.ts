export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export const Users: IUser[] = [
  {
    id: "1",
    name: "Dona Baby",
    email: "donababy@gmail.com",
    password: "123456",
    role: "dog",
  },
  {
    id: "2",
    name: "Pato Pato",
    email: "pirineu@gmail.com",
    password: "123456",
    role: "dog",
  },
  {
    id: "3",
    name: "Bebe Zinha",
    email: "bebezinha@gmail.com",
    password: "123456",
    role: "cat",
  },
  {
    id: "4",
    name: "Lincinha Nhraw",
    email: "nhraw@gmail.com",
    password: "123456",
    role: "cat",
  },
];
