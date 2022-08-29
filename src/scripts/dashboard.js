import { Modal } from "./modal.js";
import { Render } from "./render.js";
import { ApiRequests } from "./requests.js";

class Dashboard {
    static renderDashboard(posts) {
        const token = localStorage.getItem("@blog_m2:token");
        const postsList = document.getElementById("postsList");

        postsList.innerHTML = ""

        if(!token) {
            window.location.assign("../../index.html")
            alert("O usuário não está logado.")
        }

        Render.renderPosts(posts)

    }

    static createPost() {
        const conteudoPostagem = document.getElementById("editarHistoria").value
        const buttonEnviarEdicao = document.getElementById("enviarEdicao")
        const modal = document.querySelector(".modal")

        buttonEnviarEdicao.addEventListener("click", async (event) => {
            event.preventDefault()
            const data = {
                content : conteudoPostagem
            }

            await ApiRequests.createPost(data)
            modal.classList.toggle("hidden")
            const posts = await ApiRequests.getPosts()
            this.renderDashboard(posts)
            Dashboard.createPost
        })
    }
}

const posts = await ApiRequests.getPosts()
// console.log(posts)
Dashboard.renderDashboard(posts)
