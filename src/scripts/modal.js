export class Modal {
    static showModal() {
        const modal = document.querySelector(".modal")
        const buttonEdit = document.querySelector("editarHistoria");
        const buttonDelete = document.querySelector("deletePost");

        buttonEdit.addEventListener("click", ()=> {
            modal.classList.toggle("hidden")
        })

        buttonDelete.addEventListener("click",()=>{
            modal.classList.toggle("hidden")
        } )
    }

//     static closeModal() {
//         const clo
//     }
}