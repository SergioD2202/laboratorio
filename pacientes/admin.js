import { logOut } from "../requests/session.js"

const btn = document.querySelector(".logout")

btn.addEventListener('click',function(){
    logOut()
})