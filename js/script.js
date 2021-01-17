if(1) {
    console.log('ok!');
} else {
    console.log('error');
}

if(num < 49) {
    console.log('error');
} else if  (num > 100) {
    console.log('much');
} else {
    console.log('ok');
}

(num == 50) ? console.log('ok') : console.log('error'); 

const num = '51'  

switch (num) { 
    case '49':
        console.log('noooo')
        break
    case '100':
        console.log('noooo')
        break
    case '50':
        console.log('yess')
        break
    default:
        console.log('не в этот раз');
        break
}