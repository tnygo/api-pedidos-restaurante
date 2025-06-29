import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockPrisma = {
    user: {
      create: jest.fn().mockResolvedValue({
        id: 1,
        name: 'João',
        email: 'joao@email.com',
        password: 'senha123',
        age: 30,
      }),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('deve criar um novo usuário', async () => {
    const result = await service.create({
      name: 'João',
      email: 'joao@email.com',
      password: 'senha123',
    });

    expect(result).toHaveProperty('id');
    expect(mockPrisma.user.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        name: 'João',
        email: 'joao@email.com',
      }),
    });
  });
});
