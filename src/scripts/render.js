export class Render {

    static renderPosts(array) {
        const ul = document.getElementById("postsList");

        array.forEach((post) => {
            const card = Render.renderCard(post)

            ul.append(card)
        });
    }
    static renderCard(post) { //Fazer a renderizção dos posts.
        const li = document.createElement("li");
        const div = document.createElement("div");

        const img = document.createElement("img");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        const buttonEdit = document.createElement("button");
        const buttonDelete = document.createElement("button");
        const span = document.createElement("span");
        const user = localStorage.getItem("@blog_m2:User_id");


        buttonEdit.classList.add("modalEditButton")
        buttonDelete.classList.add("modalDeleteButton")
 

        img.src = post.user.avatarUrl
        h1.innerText = post.user.username
        p.innerText = post.content
        span.innerText = post.createdAt
      

        if(post.user.id === user) {
            div.append(buttonEdit);
            div.append(buttonDelete);
            return li
        } else {
            li.append(div)
            div.append(img, h1, p,span)

            return li
        }
    }

}