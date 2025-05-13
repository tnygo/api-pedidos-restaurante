// src/users/interfaces/user.interface.ts
import { AddressDto } from '../dto/address.dto';

export interface User {
  id: number;
  nome: string;
  idade: number;
  endereco?: AddressDto;
  ativo?: boolean;
}
