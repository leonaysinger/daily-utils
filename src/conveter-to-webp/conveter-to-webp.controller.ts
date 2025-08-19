import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  BadRequestException,
  InternalServerErrorException,
  Logger,
  UploadedFiles,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ConveterToWebpService } from './conveter-to-webp.service';
import { ConvertFilesDto } from './dto/convert-files.dto';
import { FileValidationPipe } from './pipes/file-validation.pipe';

@Controller('conveter-to-webp')
export class ConveterToWebpController {
  private readonly logger = new Logger(ConveterToWebpController.name);

  constructor(private readonly conveterToWebpService: ConveterToWebpService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FilesInterceptor('files'))
  async run(
    @UploadedFiles(new FileValidationPipe()) files: Express.Multer.File[],
    @Body() body: ConvertFilesDto,
  ) {
    try {
      this.logger.log(`Processing conversion request for ${files.length} files`);
      const result = await this.conveterToWebpService.convert(files, body);
      return {
        success: true,
        message: 'Files converted successfully',
        data: result,
      };
    } catch (error) {
      this.logger.error('Error converting files to WebP', error.stack);

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Failed to convert files to WebP',
      );
    }
  }
}
