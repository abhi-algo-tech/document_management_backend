import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateQuestionBankMasterDto {
  @IsInt()
  sr_no_qbm: number;

  @IsString()
  @MaxLength(500)
  question_qbm: string;

  @IsInt()
  marks_qbm: number;

  @IsOptional()
  @IsInt()
  created_by?: number;

  @IsOptional()
  @IsInt()
  modified_by?: number;
}

export class PrismaQuestionBankMasterDto {
  @IsInt()
  sr_no_qbm: number;

  @IsString()
  @MaxLength(500)
  question_qbm: string;

  @IsInt()
  marks_qbm: number;

  @IsInt()
  created_by: number;

  @IsInt()
  modified_by: number;

  created_on: Date;

  modified_on: Date;

  is_deleted: boolean;
}

export class UpdateQuestionBankMasterDto {
  @IsOptional()
  @IsInt()
  sr_no_qbm?: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  question_qbm?: string;

  @IsOptional()
  @IsInt()
  marks_qbm?: number;

  @IsOptional()
  @IsInt()
  modified_by?: number;

  @IsOptional()
  modified_on?: Date;

  @IsOptional()
  is_deleted?: boolean;
}
