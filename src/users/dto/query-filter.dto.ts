// src/users/dto/query-filter.dto.ts
import { IsOptional, IsString, IsBoolean, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryFilterDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;
}
