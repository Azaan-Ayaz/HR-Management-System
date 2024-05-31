import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidateModule } from './candidate/candidate.module';
import { JobModule } from './job/job.module';
import { JobApplicationModule } from './job-application/job-application.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/HR', {
      connectionFactory: (connection) => {
        connection.on('error', (err) => {
          console.error('Mongoose connection error:', err);
        });
        connection.on('connected', () => {
          console.log('Mongoose connected');
        });
        connection.on('disconnected', () => {
          console.log('Mongoose disconnected');
        });
        return connection;
      },
    }),
    CandidateModule,
    JobModule,
    JobApplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
