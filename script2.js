var db = firebase.firestore();
var q;
var files_Array;
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

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data().files);
        files_Array = doc.data().files;
        document.getElementById("files_list").innerHTML += '<a href = "code/' + files_Array + '">link</a>';
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
        
    
    
    
}