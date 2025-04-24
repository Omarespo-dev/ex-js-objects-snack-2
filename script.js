// 🏆 Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;
console.log(hamburger.name);
console.log(secondBurger.name ); 


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? In console verra stampato per entrambi Double Cheese Burger 

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 1





// 🏆 Code Question 2
const hamburger2 = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); 
console.log(secondBurger.ingredients[0]); 

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? In entrambi in console verra stampato Salad

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Sono 2





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


// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Sono 3







// 🏆 Code Question 4

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? 

//Allora il miglior metodo per clonare l oggetto chef e l operatore Spread (...), perche l oggetto contiene una proprieta che e a sua volta una funzione (metodo) 



// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? 

// In questo caso Utilizziamo lo structuredClone pk ci permette di fare copie di oggetti complessi in questo caso abbiamo una proprieta che ha new Date . Se usassimo il json.stringfy convertirebbe la data in una stringa 






// 🎯 Code Question 5 (Bonus)


const hamburger4 = { 
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

const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?




// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?



// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
