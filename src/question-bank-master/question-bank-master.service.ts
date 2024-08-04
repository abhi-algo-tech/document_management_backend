import { Injectable, NotFoundException } from '@nestjs/common';
import { QuestionBankMasterRepository } from './question-bank-master.repository';
import {
  CreateQuestionBankMasterDto,
  PrismaQuestionBankMasterDto,
  UpdateQuestionBankMasterDto,
} from './dto/create-question-bank-master.dto';
import * as xlsx from 'xlsx';

@Injectable()
export class QuestionBankMasterService {
  constructor(
    private readonly questionBankMasterRepository: QuestionBankMasterRepository,
  ) {}

  async findAll() {
    return this.questionBankMasterRepository.findAll(
      'question_bank_master_qbm',
    );
  }

  async findOne(id: number) {
    const questionBankMaster = await this.questionBankMasterRepository.findOne(
      'question_bank_master_qbm',
      id,
    );
    if (!questionBankMaster) {
      throw new NotFoundException(`QuestionBankMaster with ID ${id} not found`);
    }
    return questionBankMaster;
  }

  async create(createQuestionBankMasterDto: CreateQuestionBankMasterDto) {
    return this.questionBankMasterRepository.create(
      'question_bank_master_qbm',
      createQuestionBankMasterDto,
    );
  }

  async importFromExcel(file: Express.Multer.File) {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet) as any[];

    const createQuestionBankMasterDtos: PrismaQuestionBankMasterDto[] =
      rows.map((row) => ({
        sr_no_qbm: row['sr_no_qbm'],
        question_qbm: row['question_qbm'],
        marks_qbm: row['marks_qbm'],
        created_by: 1,
        modified_by: null,
        created_on: new Date(),
        modified_on: null,
        is_deleted: false,
      }));

    return this.questionBankMasterRepository.createMany(
      'question_bank_master_qbm',
      createQuestionBankMasterDtos,
    );
  }

  async update(
    id: number,
    updateQuestionBankMasterDto: UpdateQuestionBankMasterDto,
  ) {
    await this.findOne(id); // Ensure the record exists
    return this.questionBankMasterRepository.update(
      'question_bank_master_qbm',
      id,
      updateQuestionBankMasterDto,
    );
  }

  async delete(id: number) {
    await this.findOne(id); // Ensure the record exists
    return this.questionBankMasterRepository.delete(
      'question_bank_master_qbm',
      id,
    );
  }

  async softDelete(id: number) {
    await this.findOne(id); // Ensure the record exists
    return this.questionBankMasterRepository.softDelete(
      'question_bank_master_qbm',
      id,
    );
  }
}
