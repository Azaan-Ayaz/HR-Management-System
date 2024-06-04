import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { JobApplication } from "./jobApplication.schema";

@Schema()
export class Job extends Document{
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    description: string

    @Prop({required: true})
    status: string   // close & open

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobApplication' }] })
    jobApplications: JobApplication;
}

export const JobSchema = SchemaFactory.createForClass(Job)