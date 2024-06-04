import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCandidateDTO } from 'src/candidate/create-candidate.dto';
import { JobApplication } from 'src/schemas/jobApplication.schema';
// import { JobApplication } from './../schemas/jobApplication.schema';
import { UpdateCandidateDTO } from 'src/candidate/update-candidate.dto';
import { CreateJobApplicationDTO } from './create-jobApplication.dto';

@Injectable()
export class JobApplicationService {

    constructor(@InjectModel(JobApplication.name) private jobApplicationModel : Model<JobApplication>){}

    async create(createJobApplicationDTO : CreateJobApplicationDTO):Promise<JobApplication>{
        const newJobApplication = new this.jobApplicationModel(createJobApplicationDTO)
        const savedJobApplication = await newJobApplication.save()
        return savedJobApplication
    }

    async findAll():Promise<JobApplication[]>{
        return this.jobApplicationModel.find().populate("candidate").populate("job").exec()
    }

    async findOne(id:string):Promise<JobApplication>{
        const jobApplication = this.jobApplicationModel.findById(id).exec()
        if(!jobApplication) {
            throw new NotFoundException("Job not found")
        }
        return jobApplication
    }

    async update(id:string, updateJobApplicationDTO : UpdateCandidateDTO):Promise<JobApplication>{
        const updateJobApplication = await this.jobApplicationModel.findByIdAndUpdate(id).exec()
        if(!updateJobApplication){
            throw new NotFoundException("Job Application not found")
        }
        Object.assign(updateJobApplication, updateJobApplication)
        const updatedJobApplication = await updateJobApplication.save()
        return updatedJobApplication
    }

    async remove(id:string):Promise<JobApplication>{
        return this.jobApplicationModel.findByIdAndDelete(id)
    }
}
