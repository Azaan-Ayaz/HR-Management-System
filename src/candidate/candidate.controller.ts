import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Candidate } from 'src/schemas/candidate.schema';
import { CandidateService } from './candidate.service';
import { CreateCandidateDTO } from './create-candidate.dto';
import { UpdateCandidateDTO } from './update-candidate.dto';



@Controller('candidate')
export class CandidateController {

    constructor(private readonly candidateService: CandidateService){}

    @Get()
    findAll(): Promise<Candidate[]> {
      return this.candidateService.findAll();
    }

    @Get(":id")
  findOne(@Param('id', ) id: string): Promise<Candidate> {
    return this.candidateService.findOne(id);
  }

    @Post()
    create(@Body() createCandidateDTO: CreateCandidateDTO):Promise<Candidate>{
        return this.candidateService.create(createCandidateDTO)
    }

    @Patch(':id')
update(
  @Param('id', ) id: string, 
  @Body() updateCandidateDto: UpdateCandidateDTO
): Promise<Candidate> {
  return this.candidateService.update(id, updateCandidateDto);
}

@Delete(':id')
delete(@Param('id') id:string):Promise<Candidate>{
return this.candidateService.remove(id)
}

}
