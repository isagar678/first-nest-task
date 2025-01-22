import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpApiDto } from './dto/create-emp-api.dto';
import { UpdateEmpApiDto } from './dto/update-emp-api.dto';
import { UpdateEmpApiTechDto } from './dto/update-emp-api-tech.dto';
import { SearchEmpApiDto } from './dto/search-emp-api.dto';

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
    },
  ];

  create(createEmpApiDto: CreateEmpApiDto) {
    const newEmp = {
      ...createEmpApiDto,
      id: Date.now()
    }
    this.employees.push(newEmp)
    return newEmp;
  }

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
  
  

  findOne(id: number) {
    const employee = this.employees.find((emp)=>emp.id == id);
    if (!employee) {
      throw NotFoundException
    }
    return employee
  }



  update(id: number, updateEmpApiDto: UpdateEmpApiDto) {
    // updateEmpApiDt = Date.now()
    this.employees = this.employees.map((emp) => {
      return emp.id == id ? { ...emp, ...updateEmpApiDto } : emp;
    });
    return this.findAll();
  }

  updateTech(id: number, updateEmpApiTechDto: UpdateEmpApiTechDto) {
    this.employees = this.employees.map((emp) =>
      emp.id === id
        ? { ...emp, technology: updateEmpApiTechDto.technology }
        : emp,
    );
    return this.employees;
  }

  // updateTech(id:number,updateEmpApiTechDto:UpdateEmpApiTechDto){
  //   this.employees.map((emp)=>{
  //     emp.id==id? emp.technology==updateEmpApiTechDto.technology : emp
  //   })
  //   return this.employees;
  // }

  remove(id: number) {
    this.employees.forEach((emp) => {
      if (emp.id === id) {
        emp.isDeleted = true;
      }
    });
  }

  search(query: any) {
    // console.log(query)
    let newEmployees:any =  this.employees.filter((employee) => {
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
    // console.log(newEmployees)
    return newEmployees
  }
}
