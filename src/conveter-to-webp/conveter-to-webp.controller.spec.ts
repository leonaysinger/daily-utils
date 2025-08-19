import { Test, TestingModule } from '@nestjs/testing';
import { ConveterToWebpController } from './conveter-to-webp.controller';
import { ConveterToWebpService } from './conveter-to-webp.service';

describe('ConveterToWebpController', () => {
  let controller: ConveterToWebpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConveterToWebpController],
      providers: [ConveterToWebpService],
    }).compile();

    controller = module.get<ConveterToWebpController>(ConveterToWebpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
