import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  NotFoundException,
  Put,
  Query,
} from '@nestjs/common';
import { EmpApiService } from './emp-api.service';
import { CreateEmpApiDto } from './dto/create-emp-api.dto';
import { UpdateEmpApiDto } from './dto/update-emp-api.dto';
import { UpdateEmpApiTechDto } from './dto/update-emp-api-tech.dto';
import { SearchEmpApiDto } from './dto/search-emp-api.dto';

@Controller('emp-api')
export class EmpApiController {
  constructor(private readonly empApiService: EmpApiService) {}

  @Post()
  create(@Body(new ValidationPipe()) createEmpApiDto: CreateEmpApiDto) {
    return this.empApiService.create(createEmpApiDto);
  }

  @Get()
  findAll() {
    return this.empApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.empApiService.findOne(+id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmpApiDto: UpdateEmpApiDto) {
    return this.empApiService.update(+id, updateEmpApiDto);
  }

  @Patch('updateTech/:id')
  updateTech(
    @Param('id') id: string,
    @Body() updateEmpApiTechDto: UpdateEmpApiTechDto,
  ) {
    return this.empApiService.updateTech(+id, updateEmpApiTechDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empApiService.remove(+id);
  }
  @Get('/search')
  getByQuery(@Query(new ValidationPipe()) query: SearchEmpApiDto) {
    return this.empApiService.search(query);
  }
  // @Get('/search')
  // getByQuery(@Query )
}
