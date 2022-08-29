export class ApiRequests {
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@blog_m2:token") || ""
    static headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
    }

    static async login(body) {
        const userLogin = await fetch(`${this.baseUrl}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                localStorage.setItem("@blog_m2:token", response.token)
                localStorage.setItem("@blog_m2:User_id", response.userId)
                window.location.assign("src/pages/dashboard.html")
            })
            .catch(error => console.log(error))
            console.log(response)
            return userLogin
    }


    static async createUser(body) {
        const newUser = await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                window.location.assign("../../index.html")

            return response
            })
            .catch(error => console.log(error)) 

        return newUser
    }

    static async getPosts() {
        const posts = await fetch(`${this.baseUrl}/posts?page=1`, { //O número é referente à página.
            method: "GET",
            headers: this.headers,
        }) 
            .then(response => response.json())
            .catch(error => console.log(error))
            return posts.data
    }

    static async createPost(data) {
        const post = await fetch(`${this.baseUrl}/posts`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .catch(error => console.log(error))
            return post
    }
}

