var contacts =[];

function contactlist(){

    var first = document.getElementById('FirstName').value;
    var last = document.getElementById('LastName').value;
    var email = document.getElementById('email').value;
    document.getElementById('mailoutput').innerText ='thanks '+first+'!!!!';
    
    var doglovers = [first, last, email];
    contacts.push(doglovers);
    
    console.log(contacts);                                                                                 
    
    }
