import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  getAll() {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.pedidosService.findOne(Number(+id));
  }

  @Post()
  @HttpCode(201)
  create(@Body() pedido: any) {
    return this.pedidosService.create(pedido);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() pedido: any) {
    return this.pedidosService.update(Number(id), pedido);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.pedidosService.remove(Number(+id));
  }
}
