import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PedidosService {
  private pedidos: { id: number; [key: string]: any }[] = [];

  findAll() {
    return this.pedidos;
  }

  findOne(id: number) {
    return this.pedidos.find(pedido => pedido.id === id);
  }  

  create(pedido: { id: number; [key: string]: any }) {
    this.pedidos.push(pedido);
    return pedido;
  }

  update(id: number, pedido) {
    const index = this.pedidos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pedidos[index] = pedido;
      return pedido;
    }
    return null;
  }

  remove(id: number) {
    const index = this.pedidos.findIndex(pedido => pedido.id === id);
    if (index !== -1) {
      this.pedidos.splice(index, 1); // Remove da lista
      return { message: 'Pedido removido com sucesso.' };
    }
    return { message: 'Pedido não encontrado.' };
  }
  
}
