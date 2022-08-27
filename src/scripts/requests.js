export class ApiRequests {
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@blog_m2:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
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
                localStorage.setItem("@blog_m2:User_id", response.user.id)
            })
            .catch(error => console.log(error))
            return userLogin
    }
}