import { PipeTransform, BadRequestException } from '@nestjs/common';

export class FileValidationPipe implements PipeTransform {
  transform(files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('At least one file is required');
    }

    for (const file of files) {
      if (!['image/jpeg', 'image/png'].includes(file.mimetype)) {
        throw new BadRequestException(
          `Unsupported file type ${file.mimetype}`,
        );
      }
    }

    return files;
  }
}
