import { Test, TestingModule } from '@nestjs/testing';
import { EmpApiService } from './emp-api.service';

describe('EmpApiService', () => {
  let service: EmpApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpApiService],
    }).compile();

    service = module.get<EmpApiService>(EmpApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
