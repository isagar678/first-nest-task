import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery, ApiParam } from '@nestjs/swagger';
import { CreateEmpApiDto } from './dto/create-emp-api.dto';
import { UpdateEmpApiDto } from './dto/update-emp-api.dto';
import { UpdateEmpApiTechDto } from './dto/update-emp-api-tech.dto';
import { SearchEmpApiDto } from './dto/search-emp-api.dto';

@ApiTags('Employee API Service') // Tags for grouping related service endpoints
@Injectable()
export class EmpApiService {
  private employees = [
    {
      id: 0,
      firstName: 'ninjaA',
      lastName: 'last',
      experience: 2,
      technology: 'node',
      designation: 'trainee',
      joinedDate: '12-12-2022',
      isDeleted: false,
    },
    {
      id: 1,
      firstName: 'ninjaB',
      lastName: 'chess',
      experience: 3,
      technology: 'node.js',
      designation: 'trainee',
      joinedDate: '12-12-2022',
      isDeleted: false,
    }
  ];

  @ApiOperation({ summary: 'Create a new employee record' })
  @ApiBody({ type: CreateEmpApiDto })
  @ApiResponse({ status: 201, description: 'Employee created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(createEmpApiDto: CreateEmpApiDto) {
    const newEmp = {
      ...createEmpApiDto,
      id: Date.now()
    };
    this.employees.push(newEmp);
    return newEmp;
  }

  @ApiOperation({ summary: 'Retrieve all employee records' })
  @ApiResponse({ status: 200, description: 'List of employees', type: [CreateEmpApiDto] })
  findAll() {
    return this.employees
      .filter((emp) => emp.isDeleted === false)
      .map((emp) => {
        const newEmp = {}; 
        for (let key in emp) {
          if (key !== 'isDeleted') {
            newEmp[key] = emp[key]; 
          }
        }
        return newEmp;
      });
  }

  @ApiOperation({ summary: 'Get employee by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Employee found', type: CreateEmpApiDto })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  findOne(id: number) {
    const employee = this.employees.find((emp) => emp.id == id);
    if (!employee) {
      throw new NotFoundException();
    }
    return employee;
  }

  @ApiOperation({ summary: 'Update employee details' })
  @ApiParam({ name: 'id', type: 'number', description: 'Employee ID' })
  @ApiBody({ type: UpdateEmpApiDto })
  @ApiResponse({ status: 200, description: 'Employee updated successfully', type: UpdateEmpApiDto })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  update(id: number, updateEmpApiDto: UpdateEmpApiDto) {
    this.employees = this.employees.map((emp) => {
      return emp.id == id ? { ...emp, ...updateEmpApiDto } : emp;
    });
    return this.findAll();
  }

  @ApiOperation({ summary: 'Update employee technical skills' })
  @ApiParam({ name: 'id', type: 'number', description: 'Employee ID' })
  @ApiBody({ type: UpdateEmpApiTechDto })
  @ApiResponse({ status: 200, description: 'Employee technical skills updated successfully', type: UpdateEmpApiTechDto })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  updateTech(id: number, updateEmpApiTechDto: UpdateEmpApiTechDto) {
    this.employees = this.employees.map((emp) =>
      emp.id === id ? { ...emp, technology: updateEmpApiTechDto.technology } : emp,
    );
    return this.employees;
  }

  @ApiOperation({ summary: 'Delete an employee record' })
  @ApiParam({ name: 'id', type: 'number', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Employee deleted successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  remove(id: number) {
    this.employees.forEach((emp) => {
      if (emp.id === id) {
        emp.isDeleted = true;
      }
    });
  }

  @ApiOperation({ summary: 'Search employees by query parameters' })
  @ApiQuery({ name: 'query', required: true, type: SearchEmpApiDto })
  @ApiResponse({ status: 200, description: 'Employees matching the search criteria', type: [CreateEmpApiDto] })
  search(query: any) {
    let newEmployees: any = this.employees.filter((employee) => {
      if (query.firstName && !employee.firstName.toLocaleLowerCase().includes(query.firstName.toLocaleLowerCase()))
        return false;
      if (query.lastName && !employee.lastName.toLocaleLowerCase().includes(query.lastName.toLocaleLowerCase()))
        return false;
      if (query.technology && !employee.technology.toLocaleLowerCase().includes(query.technology.toLocaleLowerCase()))
        return false;
      if (
        query.designation &&
        !employee.designation.toLocaleLowerCase().includes(query.designation.toLocaleLowerCase())
      )
        return false;
      return true;
    });
    return newEmployees;
  }
}
