import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { JobApplicationService } from './job-application.service';
import { JobApplication } from 'src/schemas/jobApplication.schema';
import { CreateJobApplicationDTO } from './create-jobApplication.dto';
// import { UpdateJobApplicationDTO } from './update-jobApplication.dto';

@Controller('job-application')
export class JobApplicationController {
    constructor(private readonly jobApplicationService: JobApplicationService){}

    @Get()
    findAll():Promise<JobApplication[]>{
        return this.jobApplicationService.findAll()
    }

    @Get(':id')
    findOne(@Param("id") id:string):Promise<JobApplication>{
        return this.jobApplicationService.findOne(id)
    }

    @Post()
    create(@Body() createJobApplicationDTO: CreateJobApplicationDTO): Promise<JobApplication> {
        return this.jobApplicationService.create(createJobApplicationDTO);
    }

    @Delete()
    remove(@Param(":id") id:string):Promise<JobApplication>{
            return this.jobApplicationService.remove(id)
        }
}
