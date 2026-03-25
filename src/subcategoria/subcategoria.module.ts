import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Subcategoria, SubcategoriaSchema } from './subcategoria.schema';
import { SubcategoriaService } from './subcategoria.service';
import { SubcategoriaController } from './subcategoria.controller';

@Module({
    imports:
        [
          MongooseModule.forFeature([{ name: Subcategoria.name, schema:SubcategoriaSchema}]),
        ],
        controllers: [SubcategoriaController],
        providers: [SubcategoriaService]
})
export class SubcategoriaModule {}
