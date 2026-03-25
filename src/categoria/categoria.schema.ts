import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type CategoriaDocument = HydratedDocument<Categoria>;

@Schema()
export class Categoria{
    @Prop({required: true})
    name: string;

    @Prop()
    descricao: string;

    //fk departamento
    @Prop({ type: Types.ObjectId, ref: 'Departamento', required: true })
    department: Types.ObjectId;   

}
export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
