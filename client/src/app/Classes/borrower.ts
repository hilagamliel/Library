export class Borrower {
    id: string;
    tz: string;
    ageCategory: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    mail: string;

    constructor(id: string, tz: string, ageCategory: number, firstName: string
        , lastName: string, phoneNumber: string, mail: string) {
            this.id=id;
            this.tz=tz;
            this.ageCategory=ageCategory;
            this.firstName=firstName;
            this.lastName=lastName;
            this.phoneNumber=phoneNumber;
            this.mail=mail;
    }
}
