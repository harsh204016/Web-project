// Initialize Firebase
var config = {
    apiKey: "AIzaSyAY7jG36QHXaC5vUPh-iE3Eww2Vy_MHb-Y",
    authDomain: "covigilance-7827d.firebaseapp.com",
    databaseURL: "https://covigilance-7827d.firebaseio.com",
    projectId: "covigilance-7827d",
    storageBucket: "covigilance-7827d.appspot.com",
    messagingSenderId: "354598966821"
  };
  firebase.initializeApp(config);

  var db=firebase.firestore();

  function Signup(){
      const email=document.getElementById('email').value;
      const password=document.getElementById('password').value;
      const repeatpassword=document.getElementById('repeatpassword').value;
  

  //database initialize
  db.collection("newusers").add(
      {
        Email: email,
        Pass: password,
        Rptpass: repeatpassword
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

window.alert("Value Submitted");

  }