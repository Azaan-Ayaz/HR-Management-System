import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { JobApplication } from './jobApplication.schema';
// import { JobApplication } from './job-application.schema';

@Schema()
export class Candidate extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobApplication' }] })
  jobApplications: JobApplication[];
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
