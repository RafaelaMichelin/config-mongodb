import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosModule } from './produto/produto.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SubcategoriaService } from './subcategoria/subcategoria.service';
import { SubcategoriaController } from './subcategoria/subcategoria.controller';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';
import { MarcaModule } from './marca/marca.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rafaela:12345@cluster0.ziytani.mongodb.net/?appName=Cluster0'), ProdutosModule, DepartamentoModule, CategoriaModule, SubcategoriaModule, MarcaModule],
  controllers: [AppController, SubcategoriaController],
  providers: [AppService, SubcategoriaService],
})
export class AppModule {}
