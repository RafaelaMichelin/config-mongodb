import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type MarcaDocument = HydratedDocument<Marca>;

@Schema()
export class Marca{
    @Prop({required: true})
    name: string;

    @Prop()
    descricao: string;
  

}
export const MarcaSchema = SchemaFactory.createForClass(Marca);
