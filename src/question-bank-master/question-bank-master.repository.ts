import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prismaService/prisma.service';
import { GenericRepository } from '../repository/generic.repository';
import { question_bank_master_qbm } from 'prisma/@prisma/client';

@Injectable()
export class QuestionBankMasterRepository extends GenericRepository<question_bank_master_qbm> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
