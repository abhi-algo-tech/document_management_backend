import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaService/prisma.service';

@Injectable()
export class GenericRepository<T> {
  constructor(private prisma: PrismaService) {}

  async findAll(modelName: string): Promise<T[]> {
    return this.prisma[modelName].findMany();
  }

  async findOne(modelName: string, id: number): Promise<T> {
    return this.prisma[modelName].findUnique({
      where: { id },
    });
  }

  async create(modelName: string, data: any): Promise<T> {
    return this.prisma[modelName].create({
      data,
    });
  }

  async createMany(modelName: string, data: T[]): Promise<any> {
    return this.prisma[modelName].createMany({
      data,
    });
  }

  async update(modelName: string, id: number, data: any): Promise<T> {
    return this.prisma[modelName].update({
      where: { id },
      data,
    });
  }

  async delete(modelName: string, id: number): Promise<T> {
    return this.prisma[modelName].delete({
      where: { id },
    });
  }

  async softDelete(modelName: string, id: number): Promise<T> {
    return this.prisma[modelName].update({
      where: { id },
      data: { is_deleted: true },
    });
  }
}
