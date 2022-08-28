import { ApiRequests } from "./requests.js";

class Signup {

    static createNewUser() {
     const usuarioInput = document.getElementById("usuarioInput");
     const emailInput = document.getElementById("emailInput");
     const fotoInput = document.getElementById("fotoDePerfilInput");
     const senhaInput = document.getElementById("senhaInput");
     const buttonSignup = document.getElementById("buttonCadastrar")

     buttonSignup.addEventListener("click", async (event) => {
        event.preventDefault()

        const data = {
            username: usuarioInput.value,
            email: emailInput.value,
            avatarUrl: fotoInput.value,
            password: senhaInput.value
        }
    await ApiRequests.createUser(data)
     })
    }
}
Signup.createNewUser()