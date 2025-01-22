import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjaservice: NinjasService){}


    @Get()
    getNinjas(@Query('weapon') weapon:'stars' | 'nunchucks'){
        return this.ninjaservice.getNinjas(weapon)
    }

    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id:number){
        try {
        return this.ninjaservice.getNinja(id)
            
        } catch (error) {
            throw new NotFoundException()
        }
    }

    @Post()
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto){
        return this.ninjaservice.createNinja(createNinjaDto)
    }
    
    @Put(':id')
    updateNinja(@Param('id') id:string, @Body() updateNinjaDto: UpdateNinjaDto){
        return this.ninjaservice.updateNinja(+id,updateNinjaDto)
    }

    @Delete(':id')
    removeNinja(@Param('id') id:string){
        return this.ninjaservice.removeNinja(+id)
    }




}
