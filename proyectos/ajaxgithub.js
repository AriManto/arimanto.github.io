let perfil = document.querySelector(".perfil");
let repos = document.querySelector(".repos");
let xhr = new XMLHttpRequest();

//Info perfil
xhr.open('GET', 'https://api.github.com/users/AriManto', true)
xhr.onreadystatechange = function (){
    if (xhr.readyState == 4 && xhr.status == 200) {
        let perfData = JSON.parse(xhr.response);           
        perfil.innerHTML = "<img src='"+perfData.avatar_url+"' height=150 width=150>"+
            "<h2><a href='"+perfData.html_url+"' target='_blank'>"+perfData.name+"</a></h2>"+
            "<p class='githubUrl'><a href='"+perfData.html_url+"' target='_blank'>"+perfData.html_url+"</a></p>"+
            "<p class='bio'>"+perfData.bio+"</p>"+
            "<p class='contRepo'> Repositorios: "+perfData.public_repos+"</p>"
        ;
    }
}
xhr.send();

//Info repos
//created at? updated at?
document.querySelector("button").addEventListener('click', function(){
    xhr.open('GET', 'https://api.github.com/users/AriManto/repos', true)
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200) {
            repos.innerHTML = ""; //En caso de repetir el click
            let reposData = JSON.parse(xhr.response);
            repos.style.display = "block";           
            for (var i=0; i<reposData.length; i++){
                let repo = document.createElement('div');
                repo.classList.add('repo');
                repo.innerHTML = "<h3><a href='"+reposData[i].html_url+"' target='_blank'>"+reposData[i].name+"</a></h3>"+ 
                //"<p class='lang'>"+reposData[i].language+"</p>"+
                "<p class='desc'>"+reposData[i].description+"</p>"
                repos.append(repo)
                
            }
            document.querySelector("button").remove();
        }
    }
    xhr.send();
})
