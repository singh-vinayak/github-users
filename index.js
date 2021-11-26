const btngetUser = document.getElementById('get-user')
let username = ''
let userInfo=document.getElementById('user-info')

document.getElementById('username').addEventListener('keyup', (event) => {
    username = event.target.value
})

btngetUser.addEventListener('click', () => {
    document.getElementById('username').innerHTML=''
    userInfo.innerHTML=''
    if (username != '') {
        fetch('https://api.github.com/users/' + username).then(res => res.json()).then(data => {
            console.log(data)
            if(!data.message)
            {
                userInfo.style.display='flex'
                userInfo.innerHTML=`
            <div class="col col-md-4" style="background-color:#e0e0e0;box-shadow: 0 1px 5px rgba(0,0,0,0.35), 0 3px 4px rgba(0,0,0,0.55); height: 350px; margin-top: 3%;box-sizing: border-box;display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;">
                <img src="${data.avatar_url}" style="height: 200px; width: 200px; border-radius: 50%;">
                <h5 style="font-size: 1.5em;">${data.name}</h5>
                <span class="text-muted">${data.login}</span>
                <p style='text-align:center'>${data.company!== null? data.company : ''}</p>
            </div>
            <div class="col col-md-7" style="background-color:#e0e0e0;box-shadow: 0 1px 5px rgba(0,0,0,0.35), 0 3px 4px rgba(0,0,0,0.55); height: 350px; margin-top: 3%;box-sizing: border-box;display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;">
                <h5>${data.bio}</h5>
                <a href='${data.blog !== null ? data.blog : ''}'>${data.blog!==null? data.blog:''}</a>
                <p><i class="fas fa-map-marker"></i> ${data.location!==null? data.location:' Unspecified'}</p>
                <p><i class="fab fa-twitter"></i>${data.twitter_username}</p>
                <p><i class="fas fa-users"></i> Followers: ${data.followers} Following: ${data.following}  <i class="fab fa-github"></i>Public Repositories: ${data.public_repos}</p>
                <a href='${data.html_url}' class="btn btn-info">See Github</button>
            </div>`
            }
            else
            {
                userInfo.style.display='none'
                alert('User not Found')
            }
        })
    }

})