import { Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Candidate, CandidateSchema } from 'src/schemas/candidate.schema';
import { JobApplication, JobApplicationSchema } from 'src/schemas/jobApplication.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Candidate.name, schema: CandidateSchema}]),
  MongooseModule.forFeature([{name: JobApplication.name, schema: JobApplicationSchema}])
],
  
  controllers: [CandidateController],
  providers: [CandidateService]
})
export class CandidateModule {}
