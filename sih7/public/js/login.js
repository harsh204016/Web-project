function LogIn() {

window.alert("In login.js");
const emailId = document.getElementById('emailId').value;
const passwordId = document.getElementById('passwordId').value;

const flag = 0;
var db = firebase.firestore();
db.collection("AllUsers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const mydata = doc.data();
        const Id = mydata.ID;
        console.log(Id);
        // For Admin
     if(Id == 1){   
        if(mydata.email == emailId && mydata.password == passwordId){
          console.log("Admin Arrived!");
          flag = 1;
        }
        if (mydata.email != emailId && mydata.password != passwordId) {
            console.log("Invalid User!");
        }
      }
      if (Id == 2) {
        if(mydata.email == emailId && mydata.password == passwordId){
          console.log("PV center Arrived");
          flag = 2;
        }
        if (mydata.email != emailId && mydata.password != passwordId) {
            console.log("Invalid User!");
        }
      }
      if (Id == 3) {
        if(mydata.email == emailId && mydata.password == passwordId){
          console.log("Valid Doctor Arrived");
          flag = 3;
        }
        if (mydata.email != emailId && mydata.password != passwordId) {
            console.log("Invalid User!");
        }
      }
    });
}).
then(function(){

  if (flag == 1) {
      // window.location = "firstpage.html";
      console.log('Id of Admin');
  }
  if (flag == 2) {
    // document.write("Invalid User Not permitted");
    console.log('Id of Pv center');
  }
  if (flag == 3) {
      // window.location = "firstpage.html";
      console.log('Id of Doctor');
  }
  if (flag == 0) {
    // document.write("Invalid User Not permitted");
    console.log('Invalid User');
  }
})
.catch(function(error){
  console.log(error);
});

}

