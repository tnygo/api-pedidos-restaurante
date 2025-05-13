// src/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryFilterDto } from './dto/query-filter.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.idCounter++,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(filters: QueryFilterDto = {}, page = 1, limit = 10): {
    total: number;
    page: number;
    limit: number;
    data: User[];
  } {
    let filteredUsers = [...this.users];

    // Filtro por nome
    if (filters.nome) {
      filteredUsers = filteredUsers.filter(user =>
        user.nome.toLowerCase().includes(filters.nome!.toLowerCase()),
      );
    }

    // Filtro por ativo
    if (filters.ativo !== undefined) {
      filteredUsers = filteredUsers.filter(user => user.ativo === filters.ativo);
    }

    // Paginação
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      total: filteredUsers.length,
      page,
      limit,
      data: filteredUsers.slice(start, end),
    };
  }
}
