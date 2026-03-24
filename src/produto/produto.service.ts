import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Produto, ProdutoDocument } from './produto.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProdutoService {

    constructor(@InjectModel(Produto.name)
     private produtoModel: Model<ProdutoDocument>){}
    //criar novo produto
    async create(data: any):Promise<Produto>{
        return this.produtoModel.create(data);
    }

async findAll(): Promise<Produto[]> {
    return this.produtoModel.find();
}
}
