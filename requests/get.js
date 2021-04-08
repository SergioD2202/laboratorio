const fetchData = (url_api) => {

    return new Promise((resolve,reject)=>{

        const xhr = new XMLHttpRequest()
        xhr.open('GET',url_api,true)
        xhr.responseType = 'json'
        xhr.onreadystatechange = ( () => {
            if(xhr.readyState === 4) {

                xhr.status===200? resolve(xhr.response):reject(new Error('Error',url_api))
                    
                if(xhr.status===500) window.location.reload()
                
            }
        })

        xhr.send()
        
    })
    
}

export {fetchData}