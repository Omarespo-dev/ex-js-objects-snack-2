// 🏆 Code Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;
// console.log(hamburger.name);
// console.log(secondBurger.name ); 


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? In console verra stampato per entrambi Double Cheese Burger 

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 1





// 🏆 Code Question 2
const hamburger2 = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]);
console.log(secondBurger.ingredients[0]);

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? In entrambi in console verra stampato Salad

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Sono 2 oggetti e 1 array 





// 🏆 Code Question 3
const hamburger3 = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);


// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Sono 9







// 🏆 Code Question 4

// const chef = {
// 	name: "Chef Hyur",
// 	age: 29,
// 	makeBurger: (num = 1) => {
// 		console.log(`Ecco ${num} hamburger per te!`);
// 	},
// }

// const restaurant = {
// 	name: "Hyur's Burgers",
// 	address: {
// 		street: 'Main Street',
// 		number: 123,
// 	},
// 	openingDate: new Date(2025, 3, 11),
// 	isOpen: false,
// };

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? 

//Allora il miglior metodo per clonare l oggetto chef e l operatore Spread (...), perche l oggetto contiene una proprieta che e a sua volta una funzione (metodo) 



// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? 

// In questo caso Utilizziamo lo structuredClone pk ci permette di fare copie di oggetti complessi in questo caso abbiamo una proprieta che ha new Date . Se usassimo il json.stringfy convertirebbe la data in una stringa 






// 🎯 Code Question 5 (Bonus)


const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";


const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); //Chef Hyur ?
console.log(secondBurger.maker.name); // Chef Hyur?
console.log(hamburger.maker.restaurant.name); //Hyur's Burgers ?
console.log(secondBurger.maker.restaurant.name); //Hyur's Burgers ?




// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? GUARDARE SOPRA



// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?5






// 🎯 Code Question 6 (Bonus)

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Il metodo migliore in questo caso e utilizzare solo lo Spread operator (...),perche in questo caso per copiare l oggetto annidato di restaurant utilizziamo il dobbio spread operator prima aggiungendo la proprieta restaurant (...chef,restaurant:{...chef.restaurant}) . Infine per copiare l oggetto annidato di address si fa la stessa cosa


// ESEMPIO
// const clonedChef = {
//     ...chef,
//     restaurant: {
//         ...chef.restaurant,
//         address: {
//             ...chef.restaurant.address
//         }
//     }
// };


// ALRTRIMENTI VEDERE METODO PER BONUS EX N 7