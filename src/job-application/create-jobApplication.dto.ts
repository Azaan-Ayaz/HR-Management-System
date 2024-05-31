import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJobApplicationDTO {
  @IsNotEmpty()
  @IsString()
  candidateId: string;

  @IsNotEmpty()
  @IsString()
  jobId: string;

  // Other properties like applicationDate, coverLetter, etc.
}
