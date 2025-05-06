const user = {
    name: 'Viktor',
    age: 23,
    city: 'Moscow',
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

console.Viktor.sayHello('Viktor')

const users = [
    { name: "Анна", isAdmin: false },
    { name: "Борис", isAdmin: true },
    { name: "Виктор", isAdmin: false },
    { name: "Галина", isAdmin: false }
];

let simpleUserCount = 0;
for (let user of users) {
    if (!user.isAdmin) {
        simpleUserCount++;
    }
}
console.log("Количество простых пользователей:", simpleUserCount);