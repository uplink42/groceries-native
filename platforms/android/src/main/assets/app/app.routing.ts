import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { SelfieComponent } from "./pages/selfie/selfie.component";

export const routes = [
	{ path: "", component: LoginComponent },
	{ path: "list", component: ListComponent },
	{ path: "selfie", component: SelfieComponent }
];

export const navigatableComponents = [
	LoginComponent,
	ListComponent,
	SelfieComponent
];