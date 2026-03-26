import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Decimal128, HydratedDocument, Types } from "mongoose";

export type PrecoDocument = HydratedDocument<Preco>;

@Schema()
export class Preco{
    

     @Prop({ type: Types.ObjectId, ref: 'Produto', required: true })
    produto: Types.ObjectId;   

    //Armazenar preco
    @Prop({ type: Types.Decimal128, required:true})
    preco: Types.Decimal128;

    // Armazenando como Data 
    @Prop({ required: true, type: Date })
    dataFabricacao: Date;

    @Prop({ required: true, type: Date })
    dataValidade: Date;
}
export const PrecoSchema = SchemaFactory.createForClass(Preco);