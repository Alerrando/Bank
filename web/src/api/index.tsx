import axios from 'axios';
import { UserRegister } from '../context';

const url = 'http://localhost:80/users';

export async function getAllUsers() {
  const aux = await axios
    .get(url, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => err);

  return aux;
}

export async function createUser(register: UserRegister) {
  const aux = await axios
    .post(url, register)
    .then((res) => res.data)
    .catch((err) => err);

  return aux;
}

export async function login(login: { email: string; password: string }) {
  const aux = await axios
    .post(`${url}/login`, login)
    .then((res) => res.data)
    .catch((err) => err);

  return aux;
}

export async function infosByCpf(cpf: string) {
  const aux = await axios
    .post(
      `${url}/by-cpf`,
      { cpf },
      {
        withCredentials: true,
      }
    )
    .then((res) => res.data)
    .catch((err) => err);

  return aux;
}

export async function deposit(register: { user_cpf: string; value: number }) {
  const aux = axios
    .post(`${url}/deposit`, register, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((err) => err);

  return aux;
}
