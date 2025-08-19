import { Module } from '@nestjs/common';
import { ConveterToWebpService } from './conveter-to-webp.service';
import { ConveterToWebpController } from './conveter-to-webp.controller';
import { SharpImageConverter } from 'src/share/services/sharp.service';

@Module({
  controllers: [ConveterToWebpController],
  providers: [ConveterToWebpService, SharpImageConverter],
})
export class ConveterToWebpModule {}
