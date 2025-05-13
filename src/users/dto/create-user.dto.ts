// src/users/dto/create-user.dto.ts
import { IsString, IsInt, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDto } from './address.dto';

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsInt()
  idade: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDto)
  endereco?: AddressDto;
}
