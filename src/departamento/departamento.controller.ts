import { Body, Controller, Get, Post } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { Departamento } from './departamento.schema';

@Controller('departamento')
export class DepartamentoController {
    constructor(private readonly departamentoService: DepartamentoService) {}

    //Criar novo Departamento
    @Post()
    async create(@Body()data: Partial<Departamento>) :Promise<Departamento>{
        return this.departamentoService.create(data);
    }


    // Listar todos os Departamentos
      @Get()
      async findAll(): Promise<Departamento[]> {
        return this.departamentoService.findAll();
      }
}
