import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidateModule } from './candidate/candidate.module';
// import { JobModule } from './job/job.module';
import { JobModule } from './job/job.module';
import { JobApplicationModule } from './job-application/job-application.module';


@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://azaan:azaan@cluster0.deanbuu.mongodb.net/`), CandidateModule, JobModule, JobApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
