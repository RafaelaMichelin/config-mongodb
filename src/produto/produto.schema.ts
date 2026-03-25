import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProdutoDocument = HydratedDocument<Produto>;

@Schema()
export class Produto {
  @Prop({required:true})
  name: string;

  @Prop({required:true})
  codigo:string;

  @Prop()
  descricao: string;

//FK
 @Prop({ type: String, required: true })
id_subcategoria: string;

@Prop({ type: String, required: true })
id_marca: string;

@Prop({ type: String, required: true })
id_unidadeMedida: string;

 @Prop({ default: true })
  status: boolean;

  @Prop({ required: true })
  pesoBruto: number;

  @Prop({ required: true })
  pesoLiquido: number;

  @Prop({ required: true })
  qtdmult: number;

  @Prop({ required: true })
  qtdmin: number;

  @Prop({ required: true })
  codigodebarra: string;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);