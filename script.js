const userName = document.getElementById("user-name")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sdsdsds")
    .then(res => res.json())
    .then(data => 
        {
            document.body.style.backgroundImage = `url(${data.urls.full})`
            userName.textContent = `By: ${data.user.name}`
        })
    .catch(err => {
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1539678786826-79e8b51b457a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NDg2MDF8&ixlib=rb-4.0.3&q=80&w=1080)"
    })


fetch("")