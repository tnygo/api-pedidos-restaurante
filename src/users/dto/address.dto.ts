// src/users/dto/address.dto.ts

import { IsString } from 'class-validator';

export class AddressDto {
  @IsString()
  rua: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;
}
