const firebaseConfig = {

    apiKey: "AIzaSyAAvHaOl1CRmLB8mB4JN8dTN9mlE5qW06I",

    authDomain: "contactform-627e9.firebaseapp.com",

    databaseURL: "https://contactform-627e9-default-rtdb.firebaseio.com",

    projectId: "contactform-627e9",

    storageBucket: "contactform-627e9.firebasestorage.app",

    messagingSenderId: "811008306496",

    appId: "1:811008306496:web:0eb43fe913c5dce16e5ea5"

  };

//initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref('contactForm');
  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');

    // console.log(name, emailid, msgContent)

    saveMessages(name, emailid, msgContent);
    //enable alert
    document.querySelector('.alert').style.display = "block";

    //remove the alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";

    }, 3000);

    //reset the form 
    document.getElementById('contactForm').reset();

  }

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent
    });

};

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };