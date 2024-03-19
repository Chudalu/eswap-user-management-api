import { Op } from "sequelize";
import { UserQueryDto } from "../dto/user-query.dto";

export class UserFilter {
    firstName?: Object;
    lastName?: Object;
    email?: Object;
    dateOfBirth?: Object;

    constructor(userQuery: UserQueryDto) {
        this.setDateOfBirthFilter(userQuery.startDate, userQuery.endDate);
        this.setFirstNameFilter(userQuery.firstName);
        this.setLastNameFilter(userQuery.lastName);
        this.setEmailFilter(userQuery.email);
    }

    private setFirstNameFilter(firstNameQuery: string) {
        if (firstNameQuery) this.firstName = { [Op.like]: `%${firstNameQuery}%` };
    }

    private setLastNameFilter(lastNameQuery: string) {
        if (lastNameQuery) this.lastName = { [Op.like]: `%${lastNameQuery}%` }; 
    }

    private setEmailFilter(emailQuery: string) {
        if (emailQuery) this.email = { [Op.like]: `%${emailQuery}%` }; 
    }

    private setDateOfBirthFilter(startDate: string, endDate: string) {
        if (startDate && !endDate)
            this.dateOfBirth = { [Op.gte]: new Date(startDate) };
        else if (endDate && !startDate)
            this.dateOfBirth = { [Op.lte]: new Date(endDate) };
        else if (endDate && startDate)
            this.dateOfBirth = { [Op.and]: [
                { [Op.gte]: new Date(startDate) }, 
                { [Op.lte]: new Date(endDate) }
            ]};
    }
}