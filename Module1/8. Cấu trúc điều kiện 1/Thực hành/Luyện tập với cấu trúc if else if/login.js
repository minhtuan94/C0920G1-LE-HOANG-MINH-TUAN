let username = prompt('who are you?');

if (username == "admin") {
    let pass = prompt('Password?')
    if (pass == "TheMaster") {
        alert('Welcome');
    } else if (pass == '') {
        alert('Canceled');
    } else {
        alert('wrong password');
    }
}  else if (username == '') {
    alert('Canceled');
} else { alert("I don't know")}