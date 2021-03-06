import {Page, NavController} from 'ionic-angular';
import {Inject} from "angular2/core";
import {SecurityService} from "../../services/security-service";
//import {Home} from "../home/home";
import {NgForm, FORM_DIRECTIVES} from "angular2/common";
import {TabsPage} from '../tabs/tabs';


@Page({
    templateUrl: 'build/pages/login/login.html',
    directives: [FORM_DIRECTIVES],
})
export class Login {

    loginData:any = {};
    submitted:boolean = false;
    message:string;
    pushPage;

    constructor(public nav:NavController,
                @Inject(SecurityService) public securityService) {
        //this.pushPage = Home;
        this.pushPage = TabsPage;
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
                this.nav.push(this.pushPage);
            } else {
                this.message = 'login error';
            }
        }
    }


}
