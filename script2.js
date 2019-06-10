var db = firebase.firestore();

function storeData(){
     db.collection("java").add({
    first: "Adsdadadsada",
    last: "Lovelace",
    born: 1815
    
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}
