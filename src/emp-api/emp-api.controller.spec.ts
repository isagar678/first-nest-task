import { Test, TestingModule } from '@nestjs/testing';
import { EmpApiController } from './emp-api.controller';
import { EmpApiService } from './emp-api.service';

describe('EmpApiController', () => {
  let controller: EmpApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpApiController],
      providers: [EmpApiService],
    }).compile();

    controller = module.get<EmpApiController>(EmpApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
