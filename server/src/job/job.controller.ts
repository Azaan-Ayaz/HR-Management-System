import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from 'src/schemas/job.schema';
import { CreateJobDTO } from './create-job.dto';
import { UpdateJobDTO } from './update-job.dto';

@Controller('job')
export class JobController {

    constructor(private readonly jobService: JobService){}

    @Get()
    findAll(): Promise<Job[]>{
    return this.jobService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id:string):Promise<Job>{
        return this.jobService.findOne(id)
    }

    @Post()
    create(@Body()createJobDTO:CreateJobDTO): Promise<Job>{
        return this.jobService.create(createJobDTO)
    }

    @Patch(":id")
update(@Body() updateJobDTO: UpdateJobDTO, @Param("id") id: string): Promise<Job> {
    return this.jobService.update(id, updateJobDTO); // Swap id and updateJobDTO parameters
}


    @Delete("id")
    delete(@Param("id")id:string):Promise<Job>{
        return this.jobService.delete(id)
    }

    
}
