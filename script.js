$(document).ready(function(){
    $(".icon").hover(function(){
        $(this).css("font-size", "1.1em");
    }, function(){
        $(this).css("font-size", "1em");
    })
});

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let obj = JSON.parse(this.responseText);

        for (let i = 0; i < obj.length; i++){
            let newElem = document.createElement("li");
            let newElem1 = document.createElement("a");
            newElem1.innerHTML = obj[i].name;
            newElem1.href =obj[i].svn_url;
            newElem.appendChild(newElem1)
            document.getElementById("repo").appendChild(newElem);
        }
    }
}
newRequest.open("GET","https://api.github.com/users/choutx01/repos", true);
newRequest.send();