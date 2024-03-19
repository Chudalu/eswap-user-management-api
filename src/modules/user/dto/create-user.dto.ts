import { IsDateString, IsEmail, IsNumber, IsString, IsStrongPassword, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MaxLength(100)
    firstName: string;

    @IsString()
    @MaxLength(100)
    lastName: string;

    @MaxLength(11)
    @IsNumber()
    phoneNumber: string;

    @IsEmail()
    email: string;
    
    @IsDateString()
    dateOfBirth: string;

    @IsString()
    @IsStrongPassword({ 
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1
    })
    password: string;
}
