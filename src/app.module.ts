import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosModule } from './produto/produto.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rafaela:12345@cluster0.ziytani.mongodb.net/?appName=Cluster0'), ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
