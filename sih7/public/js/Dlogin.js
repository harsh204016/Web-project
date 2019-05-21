
function Dlogin() {
	const emailId = document.getElementById('emailId').value;
    const passwordId = document.getElementById('passwordId').value;
    console.log(emailId);
    console.log(passwordId);

    if (emailId === undefined || emailId == null || emailId.length <= 0 || passwordId === undefined || passwordId == null || passwordId.length <= 0) {
		window.alert("All the Fields are Necessary!!!!!");
		document.write("Please Fill All details");
		window.location = "Dlogin.html";
	}
	else{
		window.alert("This runs!");
          		// Fetch All Users
          	var flag = 0;
           var db = firebase.firestore();
          db.collection("Doctors").get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  const mydata = doc.data();
                  if(mydata.email == emailId && mydata.Password == passwordId){
                  	console.log("Valid User!");
                  	flag = 1;
                  }
                  if (mydata.email != emailId && mydata.Password != passwordId) {
                      console.log("Invalid User!");
                  }
              });
          }).
          then(function(){
           if (flag) {
           	    window.alert("WELCOME");
                window.location = "ADRform.html";
           }
           if (flag == 0) {
           	window.alert("You Don't Have An Account!");
            window.location = "DocSignup.html";
           }
          	
          })
          .catch(function(error){
          	console.log(error);
          });
          	}
          	// else Ends Here
          }
          // Dlogin ends Here