import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Candidate } from 'src/schemas/candidate.schema';
import { CreateCandidateDTO } from './create-candidate.dto';
import { UpdateCandidateDTO } from './update-candidate.dto';

@Injectable()
export class CandidateService {

constructor(@InjectModel(Candidate.name) private candidateModel: Model<Candidate>) {}
    

async findAll(): Promise<Candidate[]> {
    return this.candidateModel.find().populate("jobApplications").exec()
};

async findOne(id: string): Promise<Candidate> {
    return this.candidateModel.findById(id).populate("jobApplications").exec()
};

async create(createCandidate: CreateCandidateDTO): Promise<Candidate> {
    // Assuming this.candidateModel is your Mongoose model
    const newCandidate = new this.candidateModel(createCandidate); // Pass createCandidate as an object
    const savedCandidate = await newCandidate.save(); // Wait for the candidate to be saved
    return savedCandidate; // Return the saved candidate
}

async update(id: string, updateCandidate:UpdateCandidateDTO): Promise<Candidate>{
    return this.candidateModel.findByIdAndUpdate(id, updateCandidate, {new: true}).exec()
};

async remove(id: string):Promise<any>{
    return this.candidateModel.findByIdAndDelete(id).exec()
}

}
