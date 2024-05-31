<<<<<<< HEAD
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCandidateDTO } from 'src/candidate/create-candidate.dto';
import { JobApplication } from 'src/schemas/jobApplication.schema';
// import { JobApplication } from './../schemas/jobApplication.schema';
import { UpdateCandidateDTO } from 'src/candidate/update-candidate.dto';

@Injectable()
export class JobApplicationService {

    constructor(@InjectModel(JobApplication.name) private jobApplicationModel : Model<JobApplication>){}

    async create(createJobApplicationDTO : CreateCandidateDTO):Promise<JobApplication>{
        const newJobApplication = new this.jobApplicationModel(createJobApplicationDTO)
        const savedJobApplication = await newJobApplication.save()
        return savedJobApplication
    }

    async findAll():Promise<JobApplication[]>{
        return this.jobApplicationModel.find().exec()
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
}
=======
import { Injectable } from '@nestjs/common';

@Injectable()
export class JobApplicationService {}
>>>>>>> d4a1512b9075a9e430e08553e6d9fa94277ec1c0
