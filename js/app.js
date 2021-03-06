/*
const numbers = [1,2,3];
const doublenumbers = numbers.map(item=>item * 2);
console.log(doublenumbers,numbers);
const prices = [20,10,30,25,15,40,80,5];
const salePrices = prices.map(prices=>prices/2);
console.log(salePrices);
*/
/*
const products = [
	{name:'Mouse Sem Fio',price:30},
	{name:'Pen Drive',price:25},
	{name:'Cartucho De Tinta',price:50},
	{name:'Suporte Ergonômico para Notebook',price:23},
	{name:'Repetidor De Sinal Wi-Fi',price:44}
]
const saleProducts = products.map(product=>{
	if(product.price >= 30){
		//product.price = product.price / 2;
		//return product;
		return {name:product.name,price: product.price /2}
	}
	return product;
})
console.log(saleProducts);
console.log(products);

const randomNumbers = [36,99,37,63];
const numbersGreaterThen37 = randomNumbers.filter((item)=>item > 37)
console.log({numbersGreaterThen37,randomNumbers})

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]
const premiumUser = users.filter(user=>user.premium)
console.log(premiumUser);
*/
/*
E
const numbers = [1,2,3];
const sumResult = numbers.reduce((accumulator,item)=>accumulator + item,0);
console.log(sumResult);
*/
const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]
const rogerScore = phaseScores.reduce((accumulator,phaseScores)=>{
	if(phaseScores.name === 'Roger Melo'){
		accumulator += phaseScores.score;
	}
	return accumulator;
},0)
console.log(rogerScore);