var db = firebase.firestore();
		
var num=0;

var usrs="<table><tr><th>Name</th><th>Contact-Number</th><th>Email</th><th>FillingDate</th></tr>";

function showData(){										  
db.collection("Formdata").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
         const myData = doc.data();
         const uniqueID = myData.id;
         num++;
	usrs =usrs + "<tr><td>"+myData.filerName+"</td><td>"+myData.filerContactNo+"</td><td>"+myData.filerEmail+"</td><td>"+myData.fillingDate + "</td><td><input type='button' id='"+doc.id+"' class='workup' onclick ='showbtn()' value='show'></td></tr>";	
        
       });
    usrs=usrs+"</table>";
})
.then(function(){
	document.getElementById("allusers").innerHTML = usrs;

})
.catch(function(error){
console.log(error);
});
}

function showbtn(){
  
     db.collection("Formdata").get().then(function(querySnapshot) {
     querySnapshot.forEach(function(doc) {
        
          const myData = doc.data();
          uniqueID = doc.id;
          document.getElementById(uniqueID).addEventListener("click", function(){
          console.log("applied on button with ID:" + uniqueID);
          window.alert("Showing Form");
           var use="<table>" +
          // 1.
          "<tr><th>patientName</th><td>"+ myData.patientName +"</td></tr>"+
          "<tr><th>PRNnum</th><td>"+ myData.PRNnum +"</td></tr>"+
          "<tr><th>DOB</th><td>"+ myData.DOB +"</td></tr>"+
          "<tr><th>IPDnum</th><td>"+ myData.IPDnum +"</td></tr>"+
          "<tr><th>patientAddress</th><td>"+ myData.patientAddress +"</td></tr>"+
          "<tr><th>Village</th><td>"+ myData.Village +"</td></tr>"+
          "<tr><th>postalAddress</th><td>"+ myData.postalAddress +"</td></tr>"+
          "<tr><th>State</th><td>"+ myData.State +"</td></tr>"+
          "<tr><th>patientAge</th><td>"+ myData.patientAge +"</td></tr>"+
          "<tr><th>patientSex</th><td>"+ myData.patientSex +"</td></tr>"+
          "<tr><th>Constitution</th><td>"+ myData.Constitution +"</td></tr>"+
          "<tr><th>Diagnosis</th><td>"+ myData.Diagnosis +"</td></tr>"+

          // 2.
          "<tr><th>DateOfReaction</th><td>"+ myData.DateOfReaction +"</td></tr>"+
          "<tr><th>timeOfReaction</th><td>"+ myData.timeOfReaction +"</td></tr>"+
          "<tr><th>descriptionOfReaction</th><td>"+ myData.descriptionOfReaction +"</td></tr>"+
          
          // 3.
          "<tr><th>hepatic</th><td>"+ myData.hepatic +"</td></tr>"+
          "<tr><th>rental</th><td>"+ myData.rental +"</td></tr>"+
          "<tr><th>cardiac</th><td>"+ myData.cardiac +"</td></tr>"+
          "<tr><th>diabetec</th><td>"+ myData.diabetec +"</td></tr>"+
          "<tr><th>anyOther</th><td>"+ myData.anyOther +"</td></tr>"+
          "<tr><th>Mention</th><td>"+ myData.Mention +"</td></tr>"+

           // 4.
          "<tr><th>addiction</th><td>"+ myData.addiction +"</td></tr>"+

          // 5.
          "<tr><th>allergy</th><td>"+ myData.allergy +"</td></tr>"+

          // 6. 7.
          "<tr><th>nameOfDrug1</th><td>"+ myData.nameOfDrug1 +"</td></tr>"+
          "<tr><th>batchNumber1</th><td>"+ myData.batchNumber1 +"</td></tr>"+
          "<tr><th>doseDetails1</th><td>"+ myData.doseDetails1 +"</td></tr>"+
          "<tr><th>AdminRoute1</th><td>"+ myData.AdminRoute1 +"</td></tr>"+
          "<tr><th>startDate1</th><td>"+ myData.startDate1 +"</td></tr>"+
          "<tr><th>stopDate1</th><td>"+ myData.stopDate1 +"</td></tr>"+
          "<tr><th>reasonOfUse1</th><td>"+ myData.reasonOfUse1 +"</td></tr>"+
          "<tr><th>unwantedOccurrence1</th><td>"+ myData.unwantedOccurrence1 +"</td></tr>"+

          // 8.
          "<tr><th>nameOfSuspectedDrug</th><td>"+ myData.nameOfSuspectedDrug +"</td></tr>"+
          "<tr><th>manuAndExpiryOfDrug</th><td>"+ myData.manuAndExpiryOfDrug +"</td></tr>"+
          "<tr><th>remainingPack</th><td>"+ myData.remainingPack +"</td></tr>"+
          "<tr><th>consumedWith</th><td>"+ myData.consumedWith +"</td></tr>"+
          "<tr><th>dietryPrecaution</th><td>"+ myData.dietryPrecaution +"</td></tr>"+
          "<tr><th>prescriptionBased</th><td>"+ myData.prescriptionBased +"</td></tr>"+
          "<tr><th>relevantInfo</th><td>"+ myData.relevantInfo +"</td></tr>"+

          // 9.
          "<tr><th>adverseReaction</th><td>"+ myData.adverseReaction +"</td></tr>"+

          // 10.
          "<tr><th>outcomesOfAdverseReaction</th><td>"+ myData.outcomesOfAdverseReaction +"</td></tr>"+
          "<tr><th>serve</th><td>"+ myData.serve +"</td></tr>"+
          "<tr><th>reactionAbated</th><td>"+ myData.reactionAbated +"</td></tr>"+
          "<tr><th>reactionReappeared</th><td>"+ myData.reactionReappeared +"</td></tr>"+
          "<tr><th>hospitalAddress</th><td>"+ myData.hospitalAddress +"</td></tr>"+

          // 11.
          "<tr><th>abnormalFindings</th><td>"+ myData.abnormalFindings +"</td></tr>"+

          // 12.
          "<tr><th>categoryOfReportFiler</th><td>"+ myData.categoryOfReportFiler +"</td></tr>"+
          "<tr><th>filerName</th><td>"+ myData.filerName +"</td></tr>"+
          "<tr><th>filerAddress</th><td>"+ myData.filerAddress +"</td></tr>"+
          "<tr><th>filerContactNo</th><td>"+ myData.filerContactNo +"</td></tr>"+
          "<tr><th>filerEmail</th><td>"+ myData.filerEmail +"</td></tr>"+
          "<tr><th>fillingDate</th><td>"+ myData.fillingDate +"</td></tr>"+
          "<tr><td><button id='Add()'>ACCEPT</td><td><button onclick='Reject()'>REJECT</td></tr>"
          +"</table>";
         document.getElementById("form").innerHTML = use;

        });

          
     });

 }).then(function(){
 	        console.log("Intermediate Function");

 }).catch(function(error){
          	console.log(error);
 });

}
// showbtn() function Ends here
var nums=0;
var users="<table><tr><th>Name</th><th>Email</th></tr>";

function showDatas(){
                      
db.collection("Doctors").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
         const myDatas = doc.data();
         const uniqueID = myDatas.id;
         nums++;
  users =users + "<tr><td>"+myDatas.name+"</td><td>"+myDatas.email+"</td><td><input type='button' id='"+doc.id+"' class='workups' onclick ='displaybtn()' value='show'></td></tr>";  
        
       });
    users=users+"</table>";
})
.then(function(){
  document.getElementById("alldoctors").innerHTML = users;

})
.catch(function(error){
console.log(error);
});
}

function displaybtn(){
  
     db.collection("Doctors").get().then(function(querySnapshot) {
     querySnapshot.forEach(function(doc) {
        
          const myDatas = doc.data();
          uniqueID = doc.id;
          document.getElementById(uniqueID).addEventListener("click", function(){
          console.log("applied on button with ID:" + uniqueID);
          window.alert("Showing Form");
           var users="<table>" +
          // 1.
          "<tr><th>Doctor's Name</th><td>"+ myDatas.name +"</td></tr>"+
          "<tr><th>Doctor's Email</th><td>"+ myDatas.email +"</td></tr>"+
          "<tr><th>Speciality</th><td>"+ myDatas.Speciality +"</td></tr>"+
          "<tr><th>Registration Number</th><td>"+ myDatas.RegistrationNumber +"</td></tr>"+
          "<tr><th>Degree</th><td>"+ myDatas.Degree +"</td></tr>"+
          "<tr><th>Certificate</th><td>"+ myDatas.Certificate +"</td></tr>"+
          +"</table>";
         document.getElementById("doc").innerHTML = users;

        });

          
     });

 }).then(function(){
          console.log("Intermediate Function2");

 }).catch(function(error){
            console.log(error);
 });
}