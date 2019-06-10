var db = firebase.firestore();

function storeData(){
    db.collection("java").add({
    q_no: 1311110002,
    code : "file.txt"
    
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}
