import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from 'src/schemas/job.schema';
import { CreateJobDTO } from './create-job.dto';
import { UpdateJobDTO } from './update-job.dto';

@Injectable()
export class JobService {

    constructor(@InjectModel(Job.name) private jobModel: Model<Job> ) {}

    async create(createJobDTO: CreateJobDTO): Promise<Job> {
        const newJob = new this.jobModel(createJobDTO);
        const savedJob = await newJob.save();
        return savedJob;
    }

    async findAll(): Promise<Job[]> {
        return this.jobModel.find().exec();
    }

    async findOne(id: string): Promise<Job> {
        const job = await this.jobModel.findById(id).exec();
        if (!job) {
            throw new NotFoundException('Job not found');
        }
        return job;
    }

    async update(id: string, updateJobDTO: UpdateJobDTO): Promise<Job> {
        const existingJob = await this.jobModel.findById(id).exec();
        if (!existingJob) {
            throw new NotFoundException('Job not found');
        }
        // Update only the properties that are present in updateJobDTO
        Object.assign(existingJob, updateJobDTO);
        const updatedJob = await existingJob.save();
        return updatedJob;
    }

    // async delete(id: string): Promise<Job> {
    //     const deletedJob = await this.jobModel.findByIdAndDelete(id).exec();
    //     if (!deletedJob) {
    //         throw new NotFoundException('Job not found');
    //     }
    // }

    async delete(id: string): Promise<Job> {
        const deletedJob = await this.jobModel.findByIdAndDelete(id).exec();
        if (!deletedJob) {
            throw new NotFoundException('Job not found');
        }
        return deletedJob;
    }
}
