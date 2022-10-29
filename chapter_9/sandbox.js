const scores = [10, 30, 15, 25, 50, 40, 5];

// const fiteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(fiteredScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter((user) => {
    return user.premium;
});
console.log(premiumUsers);