// welcome Function for Sign Up

function welcome1(){
   const ID = document.getElementById('identity').value;
   console.log(ID);

   // Fetching the existing users
    if (ID == -1) 
{
   window.alert("Category Field is Compulsary");
     document.write("Unexpected Error Occurred!");
     console.log(ID);
     window.location = "index.html";
} 

  // Category selection Admin
    if (ID == 1) 
    {
      window.alert("Admin Cannot SignUp");
     document.write("Unexpected Error Occurred!");
     console.log(ID);
     window.location = "index.html";
    }

    // Category selection Peripheral center
    if (ID == 2) 
    {
      window.alert("Peripheral Centers Cannot SignUp");
     document.write("Unexpected Error Occurred!");
     console.log(ID);
     window.location = "index.html";    
    }

    // Category selection Peripheral Center
    if (ID == 3) 
    {
      window.alert("Welcome To Ayush Ministry");
     console.log(ID);
     window.location = "DocSignup.html";     
    }

}

// welcome function for Login function

function welcome2(){
   const ID = document.getElementById('identity').value;
    console.log(ID);
   // Fetching the existing users
    if (ID == -1) 
{  
   window.alert("Category Field is Compulsary");
     document.write("Unexpected Error Occurred!");
     console.log(ID);
     window.location = "index.html";
} 

// Category selection Admin
    if (ID == 1) {
      window.alert("Welcome To Admin Login");
     console.log(ID);
     window.location = "Alogin.html";    
    }

    // Category selection Peripheral Center
    if (ID == 2) {
      window.alert("Welcome To Peripheral Login");
     console.log(ID);
     window.location = "Plogin.html";     //Kritika's Pop Up
    }

    // Category selection Peripheral Center
    if (ID == 3) {
      window.alert("Welcome To Ayush Ministry");
     console.log(ID);
     window.location = "Dlogin.html";     //Kritika's Pop Up
    }


}





















function SignUp(){
	 const ID = document.getElementById('identity').value;
    const Email = document.getElementById('txtEmail').value;
    const pass = document.getElementById('txtpass').value;
    const btnSignUp = document.getElementById('btnSignUp');
    const btnSignOut = document.getElementById('btnSignOut');
    const btnLogIn = document.getElementById('btnLogIn');

    // Fetching the existing users
    if (ID == -1) 
{
	 window.alert("Category Field is Compulsary");
     document.write("Unexpected Error Occurred!");
     console.log(ID);
     window.location = "index.html";
} 
if (ID == 1 || ID == 2 || ID == 3 || ID == 4 || ID == 5) {

	// Fetch All Users
	var flag = 0;
 var db = firebase.firestore();
db.collection("new").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const mydata = doc.data();
        if(mydata.email == Email){
        	console.log("User Already Exists");
        	flag = 1;
        }
        if (mydata.email != Email) {
            console.log("Welcome New User");
        }
    });
}).
then(function(){
	if (flag) {
      window.alert("User Already Exists!");
      document.write("Unable to create this User");
      window.location = "index.html";
	}
	if (flag == 0) {
		
        // creating Users

        // Primary Sector 

if (ID == 1) {
	var db = firebase.firestore();
    db.collection("new").add({
   email: Email,
   Password: pass,
   Authorization: ID,
   Verified: false 
  })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
  })
      .then(function(){
      	console.log("this works");
      	window.alert("successful SignUP")
      // document.write("successful Signup");
      window.location = "index2.html"      

  })
     .catch(function(error) {
    console.error("Error adding document: ", error);
  });  
      
}



		

// Secondary Sector

if (ID == 2){
var db = firebase.firestore();
    db.collection("new").add({
   email: Email,
   Password: pass,
   Authorization: ID,
   Verified: false 
  })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
  })
      .then(function(){
      	console.log("this works");
      	window.alert("successful SignUP")
      // document.write("successful Signup");
      window.location = "index2.html"      

  })
     .catch(function(error) {
    console.error("Error adding document: ", error);
  });      
}



// Tertiary Sector

if (ID == 3){

var db = firebase.firestore();
    db.collection("new").add({
   email: Email,
   Password: pass,
   Authorization: ID,
   Verified: false 
  })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
  })
      .then(function(){
      	console.log("this works");
      	window.alert("successful SignUP")
      // document.write("successful Signup");
      window.location = "index2.html"      

  })
     .catch(function(error) {
    console.error("Error adding document: ", error);
  });   
}





// ADMIN PANEL

if (ID == 4) {
 if (Email == 'ayushiomray@gmail.com' && pass == 12345) {
        	window.location = "admin.html"
}
}





// For Any Other User
if (ID == 5) {

var db = firebase.firestore();
    db.collection("new").add({
   email: Email,
   Password: pass,
   Authorization: ID,
   Verified: false 
  })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
  })
      .then(function(){
      	console.log("this works");
      	window.alert("successful SignUP")
      // document.write("successful Signup");
      window.location = "index2.html"      

  })
     .catch(function(error) {
    console.error("Error adding document: ", error);
  });  

 }


   }
   // if ==0 runs ends
})
.catch(function(error){
	console.log(error);
});

}


}