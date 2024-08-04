import { Module } from '@nestjs/common';
import { QuestionBankMasterService } from './question-bank-master.service';
import { QuestionBankMasterController } from './question-bank-master.controller';
import { QuestionBankMasterRepository } from './question-bank-master.repository';
import { PrismaService } from 'src/prismaService/prisma.service';

@Module({
  controllers: [QuestionBankMasterController],
  providers: [
    QuestionBankMasterService,
    QuestionBankMasterRepository,
    PrismaService,
  ],
})
export class QuestionBankMasterModule {}
