import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";
import { Candidate } from "./candidate.schema";
import { Job } from "./job.schema";

@Schema()
export class JobApplication extends Document{

    @Prop({required: true, type:mongoose.Schema.Types.ObjectId,ref: "Candidate"})
    candidate: Candidate;

    @Prop({required: true, type:mongoose.Schema.Types.ObjectId, ref: "Job"})
    job: Job

    @Prop({required: true})
    appliedAt: Date
}

export const JobApplicationSchema = SchemaFactory.createForClass(JobApplication)