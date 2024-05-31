import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { Schema } from 'mongoose';
import { Job, JobSchema } from 'src/schemas/job.schema';

@Module({
    imports:[MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
    controllers:[JobController],
    providers:[JobService]
})
export class JobModule {}
