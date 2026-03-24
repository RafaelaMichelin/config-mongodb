import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DepartamentoDocument = HydratedDocument<Departamento>;

@Schema()
export class Departamento{
    @Prop({required:true})
    id_departamento: string;

    @Prop()
    descricao: string;
}

export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);