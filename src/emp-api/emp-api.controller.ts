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
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

import { EmpApiService } from './emp-api.service';
import { CreateEmpApiDto } from './dto/create-emp-api.dto';
import { UpdateEmpApiDto } from './dto/update-emp-api.dto';
import { UpdateEmpApiTechDto } from './dto/update-emp-api-tech.dto';
import { SearchEmpApiDto } from './dto/search-emp-api.dto';

@ApiTags('Employee API')  // Tags for organizing endpoints in Swagger UI
@Controller('emp-api')
export class EmpApiController {
  constructor(private readonly empApiService: EmpApiService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee record' })
  @ApiBody({ type: CreateEmpApiDto })
  @ApiResponse({ status: 201, description: 'Employee created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body(ValidationPipe) createEmpApiDto: CreateEmpApiDto) {
    return this.empApiService.create(createEmpApiDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all employee records' })
  @ApiResponse({ status: 200, description: 'List of employees', type: [CreateEmpApiDto] })
  findAll() {
    return this.empApiService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Search employees by query parameters' })
  @ApiQuery({ name: 'query', required: true, type: SearchEmpApiDto })
  @ApiResponse({ status: 200, description: 'Employees matching the search criteria', type: [CreateEmpApiDto] })
  getByQuery(@Query(new ValidationPipe()) query: SearchEmpApiDto) {
    return this.empApiService.search(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Employee found', type: CreateEmpApiDto })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  findOne(@Param('id') id: string) {
    try {
      return this.empApiService.findOne(+id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update employee details' })
  @ApiParam({ name: 'id', type: 'string', description: 'Employee ID' })
  @ApiBody({ type: UpdateEmpApiDto })
  @ApiResponse({ status: 200, description: 'Employee updated successfully', type: UpdateEmpApiDto })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  update(@Param('id') id: string, @Body() updateEmpApiDto: UpdateEmpApiDto) {
    return this.empApiService.update(+id, updateEmpApiDto);
  }

  @Patch('updateTech/:id')
  @ApiOperation({ summary: 'Update employee technical skills' })
  @ApiParam({ name: 'id', type: 'string', description: 'Employee ID' })
  @ApiBody({ type: UpdateEmpApiTechDto })
  @ApiResponse({ status: 200, description: 'Employee technical skills updated successfully', type: UpdateEmpApiTechDto })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  updateTech(
    @Param('id') id: string,
    @Body() updateEmpApiTechDto: UpdateEmpApiTechDto,
  ) {
    return this.empApiService.updateTech(+id, updateEmpApiTechDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an employee record' })
  @ApiParam({ name: 'id', type: 'string', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Employee deleted successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  remove(@Param('id') id: string) {
    return this.empApiService.remove(+id);
  }
}
