import { Module } from '@nestjs/common';
import { PrecoController } from './preco.controller';
import { PrecoService } from './preco.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Preco, PrecoSchema } from './preco.schema';

@Module({

  imports:
        [
          MongooseModule.forFeature([{ name: Preco.name, schema: PrecoSchema}]),
        ],
  controllers: [PrecoController],
  providers: [PrecoService]
})
export class PrecoModule {}
