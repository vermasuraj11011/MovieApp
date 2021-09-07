import navbar from '../component/navbar.js';
import { getData, appendData } from './showData.js';

let navDiv = document.createElement('div');

navDiv.innerHTML = navbar('display');

document.body.prepend(navDiv);

let form = document.querySelector('form');
let dropDown = document.querySelector('#dropdown');
let appendRecipe = document.querySelector('#appendRecipe');

form.addEventListener('submit', dislayRecipe);

async function dislayRecipe(e) {
	e.preventDefault();
	let inputs = document.querySelector('input').value;

	await getData(`http://www.themealdb.com/api/json/v1/1/search.php?s=${inputs}`).then((response) => {
		// console.log('response:', response.meals[0].strArea);

		appendData(response.meals[0], appendRecipe);
	});

	dropDown.style.display = 'none';
}

let input = document.querySelector('input');

input.addEventListener('input', debounce);

let timerId;

function debounce() {
	let names = input.value;
	if (timerId) {
		clearTimeout(timerId);
	}
	timerId = setTimeout(() => {
		if (names.length === 0) {
			dropDown.innerHTML = null;
			dropDown.style.display = 'none';
			return;
		}
		main();
	}, 500);
}

async function main() {
	let names = input.value;

	if (names.length < 3) {
		return;
	}

	let char = await showCharacter(names);

	console.log('char:', char);

	if (char === undefined) {
		return false;
	}
	appendCharacters(char);
}

async function showCharacter(n) {
	let res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${n}`);

	let data = await res.json();
	// console.log('data:', data.meals);
	return data.meals;
}

function appendCharacters(c) {
	dropDown.innerHTML = null;

	dropDown.style.display = 'flex';
	dropDown.style.flexDirection = 'column';

	if (c === null) {
		let div = document.createElement('div');
		div.innerText = 'Sorry No result';
		dropDown.appendChild(div);
		return;
	}

	c.forEach(({ strMeal }) => {
		// console.log('strMeal:', strMeal);
		let div = document.createElement('div');
		div.innerText = strMeal;

		div.addEventListener('click', () => {
			input.value = div.innerText;
		});

		dropDown.appendChild(div);
	});
}
