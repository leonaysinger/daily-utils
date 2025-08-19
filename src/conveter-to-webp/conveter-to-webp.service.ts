import { Injectable, Logger } from '@nestjs/common';
import { ConvertFilesDto } from './dto/convert-files.dto';
import { SharpImageConverter } from 'src/share/services/sharp.service';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as fsExtra from 'fs-extra';

@Injectable()
export class ConveterToWebpService {
  private readonly logger = new Logger(ConveterToWebpService.name);

  constructor(private readonly sharpImageConverter: SharpImageConverter) {}

  async convert(files: Express.Multer.File[], options: ConvertFilesDto): Promise<any> {
    this.logger.log(`Starting conversion of ${files.length} files`);

    const outputDir = options.outputPath || './src/converted';
    const qualityNumber = options.quality ? Number(options.quality) : 80;

    await fsExtra.ensureDir(outputDir);

    const convertedFiles: string[] = [];

    for (const file of files) {
      this.logger.log(`Converting file: ${file.originalname}`);
    
      const webpBuffer: Buffer = await this.sharpImageConverter.toWebp(
        file.buffer,
        qualityNumber,
      );
    
      const outputFile = path.join(
        outputDir,
        `${path.parse(file.originalname).name}.webp`,
      );
    
      await fs.writeFile(outputFile, webpBuffer);
    
      convertedFiles.push(outputFile);
    }

    return {
      convertedFiles,
      outputPath: outputDir,
      quality: qualityNumber,
    };
  }
}
