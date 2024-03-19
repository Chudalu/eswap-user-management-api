import { EntityStatus } from "src/repository/enum/entity-status.enum";
import { User } from "../entities/user.entity";

export class UserDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string
    dateOfBirth: Date;
    createdAt: Date;
    status: EntityStatus;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
        this.status = user.status;
        this.createdAt = user.createdAt;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phoneNumber = user.phoneNumber;
        this.dateOfBirth = user.dateOfBirth;
    }
}