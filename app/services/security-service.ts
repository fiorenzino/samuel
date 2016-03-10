export class SecurityService {

    logged:boolean = false;

    constructor() {

    }

    login() {
        this.logged = true;
    }

    logout() {
        this.logged = false;
    }

    isLogged():boolean {
        return this.logged;
    }
}