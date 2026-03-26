import { Test, TestingModule } from '@nestjs/testing';
import { PrecoController } from './preco.controller';

describe('PrecoController', () => {
  let controller: PrecoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrecoController],
    }).compile();

    controller = module.get<PrecoController>(PrecoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
