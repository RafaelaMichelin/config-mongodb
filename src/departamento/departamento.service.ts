import { Injectable } from '@nestjs/common';
import { Departamento, DepartamentoDocument } from './departamento.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DepartamentoService {
    constructor(@InjectModel(Departamento.name)
         private produtoModel: Model<DepartamentoDocument>){}
        
        //criar novo departamento
        async create(data: any):Promise<Departamento>{
            return this.produtoModel.create(data);
        }

        async findAll(): Promise<Departamento[]> {
            return this.produtoModel.find();
        }
}
