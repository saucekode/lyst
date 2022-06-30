import { Injectable } from "@nestjs/common";


@Injectable({}) // dependency injection
export class AuthService{
    signin() {
        return 'i am signed in'
    }

    signup() {
        return 'i am signed up'
    }
}