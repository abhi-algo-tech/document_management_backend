// import { Injectable } from '@nestjs/common';
// import { CompanyRepository } from './company.repository';
// import { company } from 'prisma/@prisma/client';

// @Injectable()
// export class CompanyService {
//   constructor(private readonly companyRepository: CompanyRepository) {}

//   async findAll(): Promise<company[]> {
//     // Pass 'company' as modelName
//     return this.companyRepository.findAll('company');
//   }

//   async findOne(id: number): Promise<company> {
//     // Pass 'company' as modelName
//     return this.companyRepository.findOne('company', id);
//   }

//   async create(data: any): Promise<company> {
//     // Pass 'company' as modelName
//     return this.companyRepository.create('company', data);
//   }

//   async update(id: number, data: any): Promise<company> {
//     // Pass 'company' as modelName
//     return this.companyRepository.update('company', id, data);
//   }

//   async delete(id: number): Promise<company> {
//     // Pass 'company' as modelName
//     return this.companyRepository.delete('company', id);
//   }
// }
