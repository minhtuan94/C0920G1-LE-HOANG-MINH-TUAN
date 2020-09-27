let login = prompt('Input message:');
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(message);