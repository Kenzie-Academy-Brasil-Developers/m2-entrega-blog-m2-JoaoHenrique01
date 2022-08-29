import { ApiRequests } from "./requests.js";

class LoginPage {
    static renderLoginPage() {
        const token = localStorage.getItem("@blog_m2:token")
        if(token) {
            window.location.assign("src/pages/dashboard.html")

        }
        const emailInput = document.getElementById("emailInput");
        const passwordInput = document.getElementById("passwordInput");
        const buttonLogin = document.getElementById("buttonLogin");

        buttonLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email: emailInput.value,
                password: passwordInput.value
            }

            ApiRequests.login(data)
        })
    }
}

LoginPage.renderLoginPage()