import { Module } from '@nestjs/common';
import { JobApplicationController } from './job-application.controller';
import { JobApplicationService } from './job-application.service';
// import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { JobApplication, JobApplicationSchema } from 'src/schemas/jobApplication.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: JobApplication.name,  schema: JobApplicationSchema}])],
  controllers: [JobApplicationController],
  providers: [JobApplicationService]
})
export class JobApplicationModule {}
