import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CompanyModule } from './company/company.module';
import { PrismaService } from './prismaService/prisma.service';
import { QuestionBankMasterModule } from './question-bank-master/question-bank-master.module';

@Module({
  imports: [QuestionBankMasterModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
