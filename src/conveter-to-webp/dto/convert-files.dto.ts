import { IsOptional, IsString } from 'class-validator';

export class ConvertFilesDto {
  @IsOptional()
  @IsString()
  outputPath?: string;

  @IsOptional()
  @IsString()
  quality?: string;
} 