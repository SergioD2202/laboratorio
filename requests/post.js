const sendData = (url_api,fd) => {

    return new Promise((resolve,reject)=>{

        const xhr = new XMLHttpRequest()
        xhr.open('POST',url_api,true)

        xhr.onreadystatechange = ( () => {
            if(xhr.readyState === 4) {

                xhr.status===200? resolve(xhr.responseText):reject(new Error('Error',url_api))

                if(xhr.status===500) window.location.reload()
                    
                
            }
        })

        xhr.send(fd)
        
    })
    
}

export {sendData}