import { Test, TestingModule } from '@nestjs/testing';
import { PrecoService } from './preco.service';

describe('PrecoService', () => {
  let service: PrecoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrecoService],
    }).compile();

    service = module.get<PrecoService>(PrecoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
