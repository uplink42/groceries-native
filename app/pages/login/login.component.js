"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("ui/page");
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        //this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#f5f5f5"),
            duration: 200
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("email"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "email", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: './pages/login/login.component.html',
        providers: [user_service_1.UserService],
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUc5QixtREFBcUQ7QUFHckQsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsK0RBQTZEO0FBUzdELElBQWEsY0FBYztJQU8xQix3QkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTGhGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBTTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNHLElBQUksY0FBYyxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pELElBQUksaUJBQWlCLEdBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFFL0QsSUFBSSxhQUFhLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDdEUsY0FBYyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7UUFDckMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUV4QyxJQUFJLFNBQVMsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNwRSx3QkFBWSxDQUFDLEVBQUUsSUFBSSxF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cGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5cclxuaW1wb3J0IHsgc2V0SGludENvbG9yIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hpbnQtdXRpbFwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibXktYXBwXCIsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuXHRwcm92aWRlcnM6IFsgVXNlclNlcnZpY2UgXSxcclxuXHRzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByaXZhdGUgdXNlcjogVXNlcjtcclxuXHRwcml2YXRlIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuXHRAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKFwiZW1haWxcIikgZW1haWw6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblx0XHR0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG5cdFx0dGhpcy51c2VyLmVtYWlsID0gXCJ1c2VyQG5hdGl2ZXNjcmlwdC5vcmdcIjtcclxuXHRcdHRoaXMudXNlci5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcclxuXHR9XHJcblxyXG5cdHNldFRleHRGaWVsZENvbG9ycygpIHtcclxuICBcdFx0bGV0IGVtYWlsVGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmVtYWlsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgXHRcdGxldCBwYXNzd29yZFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBcdFx0bGV0IG1haW5UZXh0Q29sb3IgPSBuZXcgQ29sb3IodGhpcy5pc0xvZ2dpbmdJbiA/IFwiYmxhY2tcIiA6IFwiI0M0QUZCNFwiKTtcclxuICBcdFx0ZW1haWxUZXh0RmllbGQuY29sb3IgPSBtYWluVGV4dENvbG9yO1xyXG4gIFx0XHRwYXNzd29yZFRleHRGaWVsZC5jb2xvciA9IG1haW5UZXh0Q29sb3I7XHJcblxyXG4gIFx0XHRsZXQgaGludENvbG9yID0gbmV3IENvbG9yKHRoaXMuaXNMb2dnaW5nSW4gPyBcIiNBQ0E2QTdcIiA6IFwiI0M0QUZCNFwiKTtcclxuICBcdFx0c2V0SGludENvbG9yKHsgdmlldzogZW1haWxUZXh0RmllbGQsIGNvbG9yOiBoaW50Q29sb3IgfSk7XHJcbiAgXHRcdHNldEhpbnRDb2xvcih7IHZpZXc6IHBhc3N3b3JkVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcbiAgXHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIFx0XHR0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG5cdH1cclxuXHJcbiAgXHRzdWJtaXQoKSB7XHJcbiAgXHRcdGlmICghdGhpcy51c2VyLmlzVmFsaWRFbWFpbCgpKSB7XHJcbiAgXHRcdFx0YWxlcnQoXCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xyXG4gIFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcbiAgICBcdGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcblx0XHQgICAgdGhpcy5sb2dpbigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdCAgICB0aGlzLnNpZ25VcCgpO1xyXG5cdFx0fVxyXG4gIFx0fVxyXG5cclxuICBcdHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICBcdHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgIFx0Ly90aGlzLnNldFRleHRGaWVsZENvbG9ycygpO1xyXG5cdCBcdGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG5cdCAgXHRjb250YWluZXIuYW5pbWF0ZSh7XHJcblx0ICAgIFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjZjVmNWY1XCIpLFxyXG5cdCAgICBcdGR1cmF0aW9uOiAyMDBcclxuXHRcdH0pO1xyXG4gIFx0fVxyXG5cclxuICBcdGxvZ2luKCkge1xyXG5cdFx0dGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcblx0ICBcdC5zdWJzY3JpYmUoXHJcblx0ICAgIFx0KCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxyXG5cdCAgICBcdChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcclxuXHQgICAgKTtcclxuXHR9XHJcblxyXG5cdHNpZ25VcCgpIHtcclxuXHRcdHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG5cdCAgICAuc3Vic2NyaWJlKFxyXG5cdCAgICBcdCgpID0+IHtcclxuXHQgICAgICAgIFx0YWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuXHQgICAgICAgIFx0dGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcblx0ICAgICAgXHR9LCAoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcclxuXHQgICAgKTtcclxuXHR9XHJcbn0iXX0=