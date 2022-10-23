// call backs & foreach

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person , index) => {
    console.log(`${index} - Hello ${person}`);
};

people.forEach(logPerson);