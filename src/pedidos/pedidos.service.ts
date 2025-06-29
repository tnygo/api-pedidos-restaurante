import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePedidoDto) {
    return this.prisma.pedido.create({ data });
  }

  findAll() {
    return this.prisma.pedido.findMany({ include: { user: true } });
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({ where: { id } });
  }

  update(id: number, data: UpdatePedidoDto) {
    return this.prisma.pedido.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}
