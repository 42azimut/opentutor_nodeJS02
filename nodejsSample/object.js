//array
let member = ['jay', 'jordan', 'kaya', 'nada'];
console.log(member[1]);

let i = 0;
while(i  < member.length) {
    console.log(member[i]);
    i++;
}

// object
const roles = {
    'programer' : 'jayden',
    'web design' : 'jay',
    'player' : 'nada',
    'pop artiest': 'yonjae'
}
console.log(roles.player);

for (let your_name in roles) {
    console.log('object:>>>', your_name, 'value => ', 
    roles[your_name]);
}
