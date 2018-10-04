//! Les opdracht

// let me = {
//     names: ['Kees', 'Jan', 'Piet', 'Peter', 'Wouter'],
//     ages: [18, 19, 16, 29, 22],
//     femiliarNames: ['Meggie', 'Sabine', 'Wim', 'Bo', 'Michael'],
//     favVehicle: {
//         type: 'car',
//         wheelCount: 4,
//         brand: 'Chevy',
//         name: 'El Dorado',
//         year: 1959
//     },
//     echoFavVehicle: {
//         echoFavVehicle() {
//             console.log(`mijn favoriete vervoersmiddel is een ${me.favVehicle.year} ${me.favVehicle.brand} ${me.favVehicle.name}, en die heeft ${me.favVehicle.wheelCount} wielen`);
//         }
//     },
//     echoFemiliarNames: {
//         echoFemiliarNames() {
//             for (i = me.femiliarNames.length; i > 0; i--) {
//                 console.log(me.femiliarNames[i - 1]);
//             }
//         }
//     }
// };

// me.echoFavVehicle.echoFavVehicle();
// me.echoFemiliarNames.echoFemiliarNames();

//! Huiswerk opdracht 1

// const lapRounds = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 

// let lapobject = {
//     time : [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
// }

// console.table(lapobject.time);

// //* de namen van de keys zijn 0 t/m 7 oftewel de index van de array

//! Huiswerk opdracht 2

// const teachers = [
//     {
//         name: "Loek",
//         profession: "Teacher",
//         brand: "Linux"
//     },
//     {
//         name: "Daan",
//         profession: "Teacher",
//         brand: "Arduino"
//     },
//     {
//         name: "Rimmert",
//         profession: "Teacher",
//         brand: "Apple"
//     }
// ]

// for(i = 0; i < teachers.length; i++){
//     console.log(`I have a ${teachers[i].profession} named ${teachers[i].name} and he likes to work on a ${teachers[i].brand} computer`);
// }

//! Huiswerk opdracht 3

const teachers = [
        {
            name: "Loek",
            profession: "Teacher",
            brand: "Linux"

        },
        {
            name: "Daan",
            profession: "Teacher",
            brand: "Arduino"
        },
        {
            name: "Rimmert",
            profession: "Teacher",
            brand: "Apple"
        }
    ]

for(i = 0; i <= 2; i++){
    teachers[i].HoursPerWeek = 10;
    teachers[i].SalaryPerWeek = 600;
    teachers[i].SalaryPerHour = teachers[i].SalaryPerWeek / teachers[i].HoursPerWeek;
}

console.table(teachers)