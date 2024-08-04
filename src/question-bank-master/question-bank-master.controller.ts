import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { QuestionBankMasterService } from './question-bank-master.service';
import {
  CreateQuestionBankMasterDto,
  UpdateQuestionBankMasterDto,
} from './dto/create-question-bank-master.dto';

@Controller('v1/question-bank-master')
export class QuestionBankMasterController {
  constructor(
    private readonly questionBankMasterService: QuestionBankMasterService,
  ) {}

  @Get()
  async findAll() {
    return this.questionBankMasterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.questionBankMasterService.findOne(id);
  }

  @Post()
  async create(
    @Body() createQuestionBankMasterDto: CreateQuestionBankMasterDto,
  ) {
    return this.questionBankMasterService.create(createQuestionBankMasterDto);
  }

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async importFromExcel(@UploadedFile() file: Express.Multer.File) {
    return this.questionBankMasterService.importFromExcel(file);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateQuestionBankMasterDto: UpdateQuestionBankMasterDto,
  ) {
    return this.questionBankMasterService.update(
      id,
      updateQuestionBankMasterDto,
    );
  }

  @Delete(':id/hard-delete')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.questionBankMasterService.delete(id);
  }

  @Delete(':id')
  async softDelete(@Param('id', ParseIntPipe) id: number) {
    return this.questionBankMasterService.softDelete(id);
  }
}
