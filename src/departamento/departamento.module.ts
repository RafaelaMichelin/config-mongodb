import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Departamento, DepartamentoSchema } from './departamento.schema';

@Module({
  imports:
  [
    MongooseModule.forFeature([{ name: Departamento.name, schema: DepartamentoSchema}]),
  ],
  providers: [DepartamentoService],
  controllers: [DepartamentoController]
})
export class DepartamentoModule {}
