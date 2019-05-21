// SignUp for Doctors
function SignUp(){
  const nameId = document.getElementById('nameId').value;
	const emailId = document.getElementById('emailId').value;
	const passwordId = document.getElementById('passwordId').value;
	const specialityId = document.getElementById('specialityId').value;
	const registrationId = document.getElementById('registrationId').value;
	const file1 = document.getElementById('file1').value; 
	const file2 = document.getElementById('file2').value;
	console.log();

	if (nameId === undefined || nameId == null || nameId.length <= 0||emailId === undefined || emailId == null || emailId.length <= 0 || passwordId === undefined || passwordId == null || passwordId.length <= 0 || specialityId === undefined || specialityId == null || specialityId.length <= 0 || registrationId === undefined || registrationId == null || registrationId.length <= 0) {
		window.alert("All the Fields are Necessary!!!!!");
		document.write("Please Fill All details");
		window.location = "DocSignup.html";
	}
	else{
		
	
		// Fetch All Users
 	var flag = 0;
  var db = firebase.firestore();
 db.collection("AllUsers").get().then(function(querySnapshot) {
     querySnapshot.forEach(function(doc) {
         // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
         const mydata = doc.data();
         if(mydata.email == emailId){
         	console.log("User Already Exists");
         	flag = 1;
         }
         if (mydata.email != emailId) {
             console.log("Welcome New User");
         }
     });
 }).
 then(function(){
 	if (flag) {
       window.alert("User Already Exists!");
       document.write("Unable to create this User Please Use Different Email!");
       window.location = "DocSignup.html";
 	}
 	if (flag == 0) {
 		var db = firebase.firestore();
     db.collection("Doctors").add({
    name: nameId,
    email: emailId,                      
    Password: passwordId,
    Speciality: specialityId,
    RegistrationNumber: registrationId,
    Certificate: file1,
    Degree: file2
   })

       .then(function(docRef) {
        console.log('DoctorsID')
         console.log("Document written with ID: ", docRef.id);
   })
       .then(function(){
         db.collection("AllUsers").add({
           email: emailId,                      
           password: passwordId,
           ID: 3
   })
       .then(function(docRef) {
        console.log('UsersID')
         console.log("Document written with ID: ", docRef.id);

  })
       .then(function(){
       	      
              // The start method will wait until the DOM is loaded.
              var file = document.getElementById("file1").files[0];
              fileName = file.name;
                  storageRef = firebase.storage().ref("doctorCertificate" + fileName);
                  uploadTask = storageRef.put(file);
                console.log("done file 1");
                
          
       	window.alert("successful SignUP");
        window.location = "Dlogin.html";  

  })
    .catch(function(error) {
    console.error("Error adding document: ", error);  
 });   

  })
       .catch(function(error) {
    console.error("Error adding document: ", error);  
 });
 }
})
.catch(function(error) {
    console.error("Error adding document: ", error);  
 });

}
}