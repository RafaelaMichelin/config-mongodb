import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Marca, MarcaSchema } from './marca.schema';

@Module({

   imports:
      [
        MongooseModule.forFeature([{ name: Marca.name, schema: MarcaSchema}]),
      ],
  providers: [MarcaService],
  controllers: [MarcaController]
})
export class MarcaModule {}
