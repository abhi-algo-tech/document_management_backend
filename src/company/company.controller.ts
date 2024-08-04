// // src/company/company.controller.ts
// import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
// import { CompanyService } from './company.service';
// import { company } from 'prisma/@prisma/client';

// @Controller('companies')
// export class CompanyController {
//   constructor(private readonly companyService: CompanyService) {}

//   @Get()
//   async findAll(): Promise<company[]> {
//     return this.companyService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string): Promise<company> {
//     return this.companyService.findOne(parseInt(id, 10));
//   }

//   @Post()
//   async create(@Body() data: any): Promise<company> {
//     return this.companyService.create(data);
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() data: any): Promise<company> {
//     return this.companyService.update(parseInt(id, 10), data);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string): Promise<company> {
//     return this.companyService.delete(parseInt(id, 10));
//   }
// }
