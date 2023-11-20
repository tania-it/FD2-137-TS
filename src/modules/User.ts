export class User {
    private firstName: string;
    private lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greet() {
        console.log(this.firstName + ' ' + this.lastName);
    }

    public getFullName() {
        return this.firstName + ' ' + this.lastName;
    } 
}
