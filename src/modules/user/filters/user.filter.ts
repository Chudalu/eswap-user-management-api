import { Op } from "sequelize";
import { UserQueryDto } from "../dto/user-query.dto";

export class UserFilter {
    firstName?: Object;
    lastName?: Object;
    email?: Object;
    dateOfBirth?: Object;

    constructor(userQuery: UserQueryDto) {
        this.setDateOfBirthFilter(this.dateOfBirth, userQuery.startDate, userQuery.endDate);
        this.setFirstNameFilter(this.firstName, userQuery.firstName);
        this.setLastNameFilter(this.lastName, userQuery.lastName);
        this.setEmailFilter(this.email, userQuery.email);
    }

    private setFirstNameFilter(firstName: Object, firstNameQuery: string) {
        if (firstNameQuery) firstName = { [Op.like]: `%${firstNameQuery}%` };
    }

    private setLastNameFilter(lastName: Object, lastNameQuery: string) {
        if (lastNameQuery) lastName = { [Op.like]: `%${lastNameQuery}%` }; 
    }

    private setEmailFilter(email: Object, emailQuery: string) {
        if (emailQuery) email = { [Op.like]: `%${emailQuery}%` }; 
    }

    private setDateOfBirthFilter(dateOfBirth: Object, startDate: string, endDate: string) {
        if (startDate && !endDate)
            dateOfBirth = { [Op.gte]: new Date(startDate) };
        else if (endDate && !startDate)
            dateOfBirth = { [Op.lte]: new Date(endDate) };
        else if (endDate && startDate)
            dateOfBirth = { [Op.and]: [
                { [Op.gte]: new Date(startDate) }, 
                { [Op.lte]: new Date(endDate) }
            ]};
    }
}