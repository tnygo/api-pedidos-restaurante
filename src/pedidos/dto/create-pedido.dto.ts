import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreatePedidoDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsNotEmpty()
  userId: number;
}
