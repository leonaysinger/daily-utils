import { Test, TestingModule } from '@nestjs/testing';
import { ConveterToWebpService } from './conveter-to-webp.service';

describe('ConveterToWebpService', () => {
  let service: ConveterToWebpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConveterToWebpService],
    }).compile();

    service = module.get<ConveterToWebpService>(ConveterToWebpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
