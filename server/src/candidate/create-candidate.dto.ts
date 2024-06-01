import { IsEmail, IsEmpty, IsString, isString } from "class-validator";

export class CreateCandidateDTO{
    @IsString()
    @IsEmpty()
    firstname: string;

    @IsString()
    @IsEmpty()
    lastName: string;

    @IsEmail()
    email: string
}