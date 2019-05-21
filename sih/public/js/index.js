   
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAu68spBVGSgCMlvkz4jDPMiIyLQ-10kOU",
    authDomain: "smart-india-hackathon-22be9.firebaseapp.com",
    databaseURL: "https://smart-india-hackathon-22be9.firebaseio.com",
    projectId: "smart-india-hackathon-22be9",
    storageBucket: "smart-india-hackathon-22be9.appspot.com",
    messagingSenderId: "601019472276"
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

          console.log(Addiction);

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


const adminRoute1 = document.getElementById('adminRoute1').value;
const adminRoute2 = document.getElementById('adminRoute2').value;
const adminRoute3 = document.getElementById('adminRoute3').value;
const adminRoute4 = document.getElementById('adminRoute4').value;
const adminRoute5 = document.getElementById('adminRoute5').value;
const adminRoute6 = document.getElementById('adminRoute6').value;
const adminRoute7 = document.getElementById('adminRoute7').value;
const adminRoute8 = document.getElementById('adminRoute8').value;
const adminRoute9 = document.getElementById('adminRoute9').value;
const adminRoute10 = document.getElementById('adminRoute10').value;
const adminRoute11= document.getElementById('adminRoute11').value;
const adminRoute12 = document.getElementById('adminRoute12').value;

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



const startDate1 = document.getElementById('startDate1').value;
const startDate2 = document.getElementById('startDate2').value;
const startDate3 = document.getElementById('startDate3').value;
const startDate4 = document.getElementById('startDate4').value;
const startDate5 = document.getElementById('startDate5').value;
const startDate6 = document.getElementById('startDate6').value;
const startDate7 = document.getElementById('startDate7').value;
const startDate8 = document.getElementById('startDate8').value;
const startDate9 = document.getElementById('startDate9').value;
const startDate10 = document.getElementById('startDate10').value;
const startDate11 = document.getElementById('startDate11').value;
const startDate12 = document.getElementById('startDate12').value;

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


const stopDate1 = document.getElementById('stopDate1').value;
const stopDate2 = document.getElementById('stopDate2').value;
const stopDate3 = document.getElementById('startDate3').value;
const stopDate4 = document.getElementById('stopDate4').value;
const stopDate5 = document.getElementById('stopDate4').value;
const stopDate6 = document.getElementById('stopDate5').value;
const stopDate7 = document.getElementById('stopDate6').value;
const stopDate8 = document.getElementById('stopDate7').value;
const stopDate9 = document.getElementById('stopDate8').value;
const stopDate10 = document.getElementById('stopDate9').value;
const stopDate11 = document.getElementById('stopDate10').value;
const stopDate12 = document.getElementById('stopDate11').value;

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














db.collection("samples").add({
    name: "ayushi"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
  }