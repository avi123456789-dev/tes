var db = firebase.firestore();
var q;
var files_Array;
var fileArr = [];

function storeData(){
    
    q = document.getElementById("q_no").value;
//    alert(q);
    
   db.collection("java").doc(q).set({
    files : "newFile.txt"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


}

function getData(){
    q = document.getElementById("q_no").value;
    var docRef = db.collection("java").doc(q);
 
    document.getElementById("opFiles").innerHTML = "";

    docRef.get().then(function(doc) {
    if (doc.exists) {
        files_Array = "";
        fileArr = []; 
       
        document.getElementById("error").style.display = "none";
        document.getElementById("opContent").style.display = "block";
        document.getElementById("body").style.backgroundColor = "gray";
        var modal = document.getElementById("opContent");
        
       
            if(document.getElementById("opFiles").innerHTML == "")
                console.log("nope");
               
        
        console.log("Document data:", doc.data().files);
        files_Array = doc.data().files;
        // localHost
//              
        console.log(files_Array);
        manipulateFiles(files_Array);
        for(var i = 0 ; i < fileArr.length ; i++){
            console.log(fileArr.length);
            document.getElementById("files_list").innerHTML += '<a href = "code/' + files_Array + '">link</a>';
//        document.getElementById("opFiles").innerHTML += '<li><a class = "filesText" href = "code/elabJava/' + q + '/' + fileArr[i] + '">' + fileArr[i] + '</a></li>';
        }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
            document.getElementById("body").style.backgroundColor = "white";
            
        }
        // github
        document.getElementById("files_list").innerHTML += '<a href = "code/' + files_Array + '">link</a>';
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        document.getElementById("error").style.display = "block";
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

}

function manipulateFiles(files){
    
    var len = files.length;
    var c = 0;
    var str = "";
    for(var i = 0 ; i < len; i++){
        if(files[i] == ' '){
                    fileArr.push(str);
            console.log(str);
                str = "";
        }
        else if(i == len - 1){
            str += files[i];
            fileArr.push(str);
            console.log(str);
            str = "";
            
        }
        else {
            str +=  files[i];
        }
    }

}



