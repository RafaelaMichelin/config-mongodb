import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type SubcategoriaDocument = HydratedDocument<Subcategoria>;

@Schema()
export class Subcategoria{
    @Prop({required: true})
    name: string;

    @Prop()
    descricao: string;

    //fk categoria
    @Prop({ type: Types.ObjectId, ref: 'Categoria', required: true })
    department: Types.ObjectId;   

}
export const SubcategoriaSchema = SchemaFactory.createForClass(Subcategoria);