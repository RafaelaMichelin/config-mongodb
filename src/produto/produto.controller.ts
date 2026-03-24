import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.schema';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  // Criar novo produto
  @Post()
  async create(@Body() data: Partial<Produto>): Promise<Produto> {
    return this.produtoService.create(data);
  }

  // Listar todos os produtos
  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }
}