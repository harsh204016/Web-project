   


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

  var db = firebase.firestore();

  function submitForm()
  {
  	// FORM VARIABLES
  	// 1.Patient/consumer identification(please complete or tick boxes below as appropriate)
  	const pname = document.getElementById('pname').value;
  	const prnNum = document.getElementById('prnNum').value;
  	const dob = document.getElementById('dob').value;
  	const ipdNum = document.getElementById('ipdNum').value;
  	const pAddress = document.getElementById('pAddress').value;
  	const village = document.getElementById('village').value;
  	const post = document.getElementById('post').value;
  	const state = document.getElementById('state').value;
  	const pAge = document.getElementById('pAge').value;
  	const sex = document.getElementById('sex').value;
  	const cons = document.getElementById('cons').value;
  	const dia = document.getElementById('dia').value;
  	
   
   // console.log(pname);
   // console.log(prnNum);
   // console.log(dob);
   // console.log(ipdNum);
   // console.log(pAddress);
   // console.log(village);
   // console.log(post);
   // console.log(state);
   // console.log(pAge);
   // console.log(sex);
   // console.log(cons);
   // console.log(dia);

   // 2.Description of the Suspected Adverse Reaction
   const ddate = document.getElementById('ddate').value;
   const dtime = document.getElementById('dtime').value;
   const ddes = document.getElementById('ddes').value;

    // console.log(ddate);
    //  console.log(dtime);
    //   console.log(ddes);

  // 3.Whether the person is Suffering from any Chronic Disorder?
     const Hepatic = document.getElementById('Hepatic').value;
     const Rental = document.getElementById('Rental').value;
     const Cardiac = document.getElementById('Cardiac').value;
     const Diabetec = document.getElementById('Diabetec').value;
     const AnyOthers = document.getElementById('AnyOthers').value;
     const mention = document.getElementById('mention').value; //Textarea along with the given above checkbox

     // console.log(Hepatic);
     //  console.log(Rental);
     //   console.log(Cardiac);
     //    console.log(Diabetec);
     //     console.log(AnyOthers);
     //      console.log(mention);

     // 4.Addictions if any?If yes,please specify.
          const Addiction = document.getElementById('Addiction').value;

          // console.log(Addiction);

    // 5.H/O previous allergies/Drug Reactions,if any.If yes,please specify.

const Allergy = document.getElementById('Allergy').value;

          // console.log(Allergy);


// 6.List of all ASU and H drugs used by the patient during the period of one month:1-6
// 7.List of other Drugs used by thr Patient During the period of one Month:7-12

const drug1 = document.getElementById('drug1').value;
const drug2 = document.getElementById('drug2').value;
const drug3 = document.getElementById('drug3').value;
const drug4 = document.getElementById('drug4').value;
const drug5 = document.getElementById('drug5').value;
const drug6 = document.getElementById('drug6').value;
const drug7 = document.getElementById('drug7').value;
const drug8 = document.getElementById('drug8').value;
const drug9 = document.getElementById('drug9').value;
const drug10 = document.getElementById('drug10').value;
const drug11 = document.getElementById('drug11').value;
const drug12 = document.getElementById('drug12').value;

// console.log(drug1);
// console.log(drug2);
// console.log(drug3);
// console.log(drug4);
// console.log(drug5);
// console.log(drug6);
// console.log(drug7);
// console.log(drug8);
// console.log(drug9);
// console.log(drug10);
// console.log(drug11);
// console.log(drug12);

const batch1 = document.getElementById('batch1').value;
const batch2 = document.getElementById('batch2').value;
const batch3 = document.getElementById('batch3').value;
const batch4 = document.getElementById('batch4').value;
const batch5 = document.getElementById('batch5').value;
const batch6 = document.getElementById('batch6').value;
const batch7 = document.getElementById('batch7').value;
const batch8 = document.getElementById('batch8').value;
const batch9 = document.getElementById('batch9').value;
const batch10 = document.getElementById('batch10').value;
const batch11 = document.getElementById('batch11').value;
const batch12 = document.getElementById('batch12').value;


// console.log(batch1);
// console.log(batch2);
// console.log(batch3);
// console.log(batch4);
// console.log(batch5);
// console.log(batch6);
// console.log(batch7);
// console.log(batch8);
// console.log(batch9);
// console.log(batch10);
// console.log(batch11);
// console.log(batch12);

const dose1 = document.getElementById('dose1').value;
const dose2 = document.getElementById('dose2').value;
const dose3 = document.getElementById('dose3').value;
const dose4 = document.getElementById('dose4').value;
const dose5 = document.getElementById('dose5').value;
const dose6 = document.getElementById('dose6').value;
const dose7 = document.getElementById('dose7').value;
const dose8 = document.getElementById('dose8').value;
const dose9 = document.getElementById('dose9').value;
const dose10 = document.getElementById('dose10').value;
const dose11 = document.getElementById('dose11').value;
const dose12 = document.getElementById('dose12').value;



// console.log(dose1);
// console.log(dose2);
// console.log(dose3);
// console.log(dose4);
// console.log(dose5);
// console.log(dose6);
// console.log(dose7);
// console.log(dose8);
// console.log(dose9);
// console.log(dose10);
// console.log(dose11);
// console.log(dose12);


const AdminRoute1 = document.getElementById('adminRoute1').value;
const AdminRoute2 = document.getElementById('adminRoute2').value;
const AdminRoute3 = document.getElementById('adminRoute3').value;
const AdminRoute4 = document.getElementById('adminRoute4').value;
const AdminRoute5 = document.getElementById('adminRoute5').value;
const AdminRoute6 = document.getElementById('adminRoute6').value;
const AdminRoute7 = document.getElementById('adminRoute7').value;
const AdminRoute8 = document.getElementById('adminRoute8').value;
const AdminRoute9 = document.getElementById('adminRoute9').value;
const AdminRoute10 = document.getElementById('adminRoute10').value;
const AdminRoute11= document.getElementById('adminRoute11').value;
const AdminRoute12 = document.getElementById('adminRoute12').value;

// console.log(adminRoute1);
// console.log(adminRoute2);
// console.log(adminRoute3);
// console.log(adminRoute4);
// console.log(adminRoute5);
// console.log(adminRoute6);
// console.log(adminRoute7);
// console.log(adminRoute8);
// console.log(adminRoute9);
// console.log(adminRoute10);
// console.log(adminRoute11);
// console.log(adminRoute12);



const StartDate1 = document.getElementById('startDate1').value;
const StartDate2 = document.getElementById('startDate2').value;
const StartDate3 = document.getElementById('startDate3').value;
const StartDate4 = document.getElementById('startDate4').value;
const StartDate5 = document.getElementById('startDate5').value;
const StartDate6 = document.getElementById('startDate6').value;
const StartDate7 = document.getElementById('startDate7').value;
const StartDate8 = document.getElementById('startDate8').value;
const StartDate9 = document.getElementById('startDate9').value;
const StartDate10 = document.getElementById('startDate10').value;
const StartDate11 = document.getElementById('startDate11').value;
const StartDate12 = document.getElementById('startDate12').value;

// console.log(startDate1);
// console.log(startDate2);
// console.log(startDate3);
// console.log(startDate4);
// console.log(startDate5);
// console.log(startDate6);
// console.log(startDate7);
// console.log(startDate8);
// console.log(startDate9);
// console.log(startDate10);
// console.log(startDate11);
// console.log(startDate12);


const StopDate1 = document.getElementById('stopDate1').value;
const StopDate2 = document.getElementById('stopDate2').value;
const StopDate3 = document.getElementById('startDate3').value;
const StopDate4 = document.getElementById('stopDate4').value;
const StopDate5 = document.getElementById('stopDate4').value;
const StopDate6 = document.getElementById('stopDate5').value;
const StopDate7 = document.getElementById('stopDate6').value;
const StopDate8 = document.getElementById('stopDate7').value;
const StopDate9 = document.getElementById('stopDate8').value;
const StopDate10 = document.getElementById('stopDate9').value;
const StopDate11 = document.getElementById('stopDate10').value;
const StopDate12 = document.getElementById('stopDate11').value;

// console.log(stopDate1);
// console.log(stopDate2);
// console.log(stopDate3);
// console.log(stopDate4);
// console.log(stopDate5);
// console.log(stopDate6);
// console.log(stopDate7);
// console.log(stopDate8);
// console.log(stopDate9);
// console.log(stopDate10);
// console.log(stopDate11);
// console.log(stopDate12);

const reason1 = document.getElementById('reason1').value;
const reason2 = document.getElementById('reason2').value;
const reason3 = document.getElementById('reason3').value;
const reason4 = document.getElementById('reason4').value;
const reason5 = document.getElementById('reason5').value;
const reason6 = document.getElementById('reason6').value;
const reason7 = document.getElementById('reason7').value;
const reason8 = document.getElementById('reason8').value;
const reason9 = document.getElementById('reason9').value;
const reason10 = document.getElementById('reason10').value;
const reason11 = document.getElementById('reason11').value;
const reason12 = document.getElementById('reason12').value;

// console.log(reason1);
// console.log(reason2);
// console.log(reason3);
// console.log(reason4);
// console.log(reason5);
// console.log(reason6);
// console.log(reason7);
// console.log(reason8);
// console.log(reason9);
// console.log(reason10);
// console.log(reason11);
// console.log(reason12);

const occurence1 = document.getElementById('occurence1').value;
const occurence2 = document.getElementById('occurence2').value;
const occurence3 = document.getElementById('occurence3').value;
const occurence4 = document.getElementById('occurence4').value;
const occurence5 = document.getElementById('occurence5').value;
const occurence6 = document.getElementById('occurence6').value;
const occurence7 = document.getElementById('occurence7').value;
const occurence8 = document.getElementById('occurence8').value;
const occurence9 = document.getElementById('occurence9').value;
const occurence10 = document.getElementById('occurence10').value;
const occurence11 = document.getElementById('occurence11').value;
const occurence12 = document.getElementById('occurence12').value;

// console.log(occurence1);
// console.log(occurence2);
// console.log(occurence3);
// console.log(occurence4);
// console.log(occurence5);
// console.log(occurence6);
// console.log(occurence7);
// console.log(occurence8);
// console.log(occurence9);
// console.log(occurence10);
// console.log(occurence11);
// console.log(occurence12);

// 8.Details of Drugs Suspect to cause ADR:

const t1 = document.getElementById('t1').value;
const t2 = document.getElementById('t2').value;
const t3 = document.getElementById('t3').value;
const t4 = document.getElementById('t4').value;
const t5 = document.getElementById('t5').value;
const t6 = document.getElementById('t6').value;
const t7 = document.getElementById('t7').value;

// console.log(t1);
// console.log(t2);
// console.log(t3);
// console.log(t4);
// console.log(t5);
// console.log(t6);
// console.log(t7);


// 9.Management provided/taken for suspected adverse reactions:
const t8 = document.getElementById('t8').value;

// console.log(t8);

// 10.Please indicate outcome of the suspected adverse reaction(Tick Appropriate)

 // const Adverse1 = document.getElementById('Adverse1').value;
 // const Adverse2 = document.getElementById('Adverse2').value;

var Adverse = document.querySelector('input[name = "adverse"]:checked').value;

 // console.log(Adverse);
 const Serve = document.getElementById('Serve').value;

// console.log(Serve);

const ReactionAbated = document.getElementById('ReactionAbated').value;
const ReactionReappeared = document.getElementById('ReactionReappeared').value;

// console.log(ReactionAbated);
// console.log(ReactionReappeared);

const HospitalAddress = document.getElementById('HospitalAddress').value;

// console.log(HospitalAddress);

// 11.If any abnormal findings of relevant laboratory investigations related to the episode done pre and post episode of ADR:

const AbnormalFindings = document.getElementById('abnormalFindings').value;
// console.log(abnormalFindings);

// 12.Particulars of ADR reporter:

 const Category = document.querySelector('input[name = "2"]:checked').value;

 // console.log(Category);


const candidateName = document.getElementById('candidateName').value;
const candidateAddress = document.getElementById('candidateAddress').value; 
const candidateContact = document.getElementById('candidateContact').value;
const candidateEmail = document.getElementById('contactEmail').value;
const contactDate = document.getElementById('contactDate').value; 


// console.log(candidateName);
// console.log(candidateAddress);
// console.log(candidateContact);
// console.log(contactDate);

db.collection("Formdata").add({
	// 1.
    patientName: pname,
    PRNnum: prnNum,
    DOB: dob,
    IPDnum: ipdNum,
    patientAddress: pAddress,
    Village: village,
    postalAddress: post,
    State: state,
    patientAge: pAge,
    patientSex: sex,
    Costitution: cons,
    Diagnosis: dia,

    // 2.
    DateOfReaction: ddate,
    timeOfReaction: dtime,
    descriptionOfReaction: ddes,

    // 3.
    hepatic: Hepatic,
    rental: Rental,
    cardiac: Cardiac,
    diabetec: Diabetec,
    anyOther: AnyOthers,
    Mention: mention,

    // 4.
    addiction: Addiction,

    // 5.
    allergy: Allergy,

    // 6., 7.
    nameOfDrug1: drug1,
    batchNumber1: batch1,
    doseDetails1: dose1,
    AdminRoute1:  AdminRoute1,
    startDate1: StartDate1,
    stopDate1: StopDate1,
    reasonOfUse1: reason1,
    unwantedOccurrence1: occurence1,

    // 8.Details of Suspected Drug

    nameOfSuspectedDrug: t1,
    manuAndExpiryOfDrug: t2,
    remainingPack: t3,
    consumedWith: t4,
    dietryPrecaution: t5,
    prescriptionBased: t6,
    relevantInfo: t7,


    // 9.
    adverseReaction: t8,

    // 10.
    outcomesOfAdverseReaction: Adverse,
    serve: Serve,
    reactionAbated: ReactionAbated,
    reactionReappeared: ReactionReappeared,
    hospitalAddress: HospitalAddress,

    // 11.
    abnormalFindings: AbnormalFindings,

    // 12.
    categoryOfReportFiler: Category,
    filerName: candidateName,
    filerAddress: candidateAddress,
    filerContactNo: candidateContact,
    filerEmail: candidateEmail,
    fillingDate: contactDate
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
  
  window.alert("Form Has Been Successfully Submitted.")
}


 

 
  	