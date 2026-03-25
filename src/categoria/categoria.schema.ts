import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type CateogiraDocument = HydratedDocument<Categoria>;

@Schema()
export class Categoria{
    @Prop({required: true})
    id_categoria: string;

    @Prop()
    descricao: string;

    //fk departamento
    @Prop({ type: Types.ObjectId, ref: 'Departamento', required: true })
    department: Types.ObjectId;   

}
export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
