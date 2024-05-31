import { PartialType } from "@nestjs/mapped-types";
// import { CreateCandidateDTO } from "src/candidate/create-candidate.dto";
import { CreateJobDTO } from "./create-job.dto";

export class UpdateJobDTO extends PartialType(CreateJobDTO){}