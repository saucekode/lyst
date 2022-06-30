import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('api/v1/auth')
export class AuthController {
    // autowire AuthService class in AuthController to be used
    constructor(private authService: AuthService) {}

    @Post('signin')
    signin() {
        return this.authService.signin()
    }

    @Post('signup')
    signup() {
        return this.authService.signup() 
    }
}