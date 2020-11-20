
function storange(){
    localStorage.setItem('data', document.getElementById('result').value);
    
}
function reload(){
    document.getElementById("result").innerHTML = localStorage.getItem("data");
    
    // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

function autoSave(){
    setTimeout(function(){
        storange();
    }, 3000)
}

function deleteNote(){
    localStorage.removeItem('data');
}