import { IsDateString, IsEmail, IsOptional, IsString } from "class-validator";

export class UserQueryDto {

    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsDateString()
    startDate?: string;

    @IsOptional()
    @IsDateString()
    endDate?: string;

}