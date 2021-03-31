import {sendData} from "./post.js"

const checkSession = async (url_php) =>{
    try {
        const emptyfd = new FormData()

        const check = await sendData(url_php,emptyfd)

        if(check.charAt(0)==="1") window.location.href ="../pacientes/list.html"
        
    } catch (error) {
        console.error(error)
    }
}

const logIn = async (fd) =>{

    try {
        const login = await sendData("../requests/sessionstart.php",fd)

        if(login.charAt(0)==="1") window.location.href ="../pacientes/list.html"
        
    } catch (error) {
        console.error(error)
    }

}

const logOut = async () =>{
    try {
        const emptyfd = new FormData()

        const destroy = await sendData("../requests/destroy.php",emptyfd)

        if(destroy.charAt(0)==="1") window.location.href ="../index.php"
        
    } catch (error) {
        console.error(error)
    }

}

export {checkSession,logIn,logOut}
