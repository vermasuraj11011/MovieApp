async function getData(url) {
	let res = await fetch(url);

	let data = await res.json();

	return data;
}

function appendData({ strMealThumb, strMeal, strInstructions }, place) {
	place.innerHTML = null;

	console.log('idMeal:', strInstructions);
	let image = document.createElement('img');
	image.src = strMealThumb;

	let h2 = document.createElement('h2');
	h2.innerText = strMeal;

	let p = document.createElement('p');
	p.innerText = strInstructions;

	place.append(image, h2, p);
}

export { getData, appendData };
