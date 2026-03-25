# Projeto NestJS + MongoDB Atlas

Este projeto demonstra como configurar o **NestJS** com **MongoDB Atlas** usando **Mongoose**, criar um schema de produto, service e controller para CRUD mínimo (criar e listar produtos).

---

##  Pré-requisitos

- Node.js >= 18  
- NestJS CLI instalado:  
```bash
npm i -g @nestjs/cli
```
Criar Projeto NestJs
```bash
nest new projeto-nest-mongo
cd projeto-nest-mongo
```
Instalar Dependências
```bash
npm install @nestjs/mongoose mongoose
```

## Configurar MongoDB Atlas

- Criar um cluster, contendo nome e senha 
- Copiar o link que foi gerado

Conectar o NestJs com o Mongo do Atlas
no app module insira:
```bash
 MongooseModule.forRoot('mongodb+srv://USUARIO:SENHA@cluster0.ziytani.mongodb.net/produtos_db'),
    ProdutosModule
```

## Gerar todos os componentes do projeto(controller, service, module)
```bash
nest g controller produto
nest g service produto
nest g module produto
```
 ## Criar o arquivo Schema 
- Realizar criação de entidades do banco de dados
- Implementar relações entre tabelas
 ```bash
@Schema()
export class Produto {
@Prop({required:true})
id_produto: string; 
  ```

## Registrar o Schema no Module
```bash
imports: [
MongooseModule.forFeature([
 { name: Produto.name, schema: ProdutoSchema }
])
```
## Testar Aplicação
No terminal digite
```bash
run start: dev
```
