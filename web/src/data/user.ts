import { faker } from "@faker-js/faker";

export type UserAttributes = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
  cep: string;
  dateOfBirth: string;
  addressNumber: number;
};

export const user: UserAttributes = {
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  cpf: faker.string.numeric(11),
  password: faker.internet.password(),
  cep: faker.string.numeric(8),
};
