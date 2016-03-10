import {Page, NavController} from 'ionic-angular';
import {Inject} from "angular2/core";
import {SecurityService} from "../../services/security-service";
import {Home} from "../home/home";
import {NgForm, FORM_DIRECTIVES} from "angular2/common";


@Page({
    templateUrl: 'build/pages/login/login.html',
    directives: [FORM_DIRECTIVES],
})
export class Login {

    loginData:any = {};
    submitted:boolean = false;
    message:string;
    pushPage;
    securityService:SecurityService;

    constructor(public nav:NavController, @Inject(SecurityService) securityService) {
        this.pushPage = Home;
        this.securityService = securityService;
        this.loginData = {
            username: '',
            password: ''
        };
        this.submitted = false;
    }


    login(form:NgForm) {
        this.submitted = true;
        if (form.valid) {
            console.log(form.valid);
            console.log('username: ' + this.loginData.username + ' password:' + this.loginData.password);
            if (this.loginData.username === 'admin' && this.loginData.password === 'admin') {
                this.securityService.login();
                this.nav.setRoot(this.pushPage);
            } else {
                this.message = 'login error';
            }
        }
    }


}
