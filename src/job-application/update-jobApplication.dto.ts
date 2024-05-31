import { PartialType } from '@nestjs/mapped-types';
import { CreateJobApplicationDTO } from './create-jobApplication.dto';
// import { CreateJobApplicationDTO } from './create-job-application.dto';

export class UpdateJobApplicationDTO extends PartialType(CreateJobApplicationDTO) {}
