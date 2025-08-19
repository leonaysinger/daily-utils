import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConveterToWebpModule } from './conveter-to-webp/conveter-to-webp.module';

@Module({
  imports: [ConveterToWebpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
