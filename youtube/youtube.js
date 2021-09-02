let searchBtn = document.querySelector('.navbar__center__search-btn');

searchBtn.addEventListener('click', displayMovie);

let movieDis = document.querySelector('#movieDisplay');
let containerDiv = document.querySelector('#container');

async function displayMovieDefault() {
	// let video = document.querySelector('.navbar__center__input').value;

	let res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/search?q=most+popular&regionCode=IN&type=video&key=AIzaSyCRtsr9RbTDPUjvEVXteKP-P7sUbCfTe4M&maxResults=20`
	);

	let data = await res.json();

	console.log('data:', data);

	for ({ id: { videoId } } of data.items) {
		let video_frame = document.createElement('iframe');
		let divVid = document.createElement('div');

		video_frame.src = `https://www.youtube.com/embed/${videoId}`;

		video_frame.allow = 'fullscreen';

		divVid.appendChild(video_frame);

		movieDis.appendChild(divVid);
	}
}

displayMovieDefault();

async function displayMovie() {
	movieDis.remove();

	let video = document.querySelector('.navbar__center__input').value;

	let res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyCRtsr9RbTDPUjvEVXteKP-P7sUbCfTe4M&maxResults=20`
	);

	let data = await res.json();

	// console.log('data:', data);
	let movieDis1 = document.createElement('div');
	movieDis1.setAttribute('id', 'movieDisplay');

	for ({ id: { videoId } } of data.items) {
		let video_frame = document.createElement('iframe');
		let divVid = document.createElement('div');

		video_frame.src = `https://www.youtube.com/embed/${videoId}`;

		video_frame.allow = 'fullscreen';

		divVid.appendChild(video_frame);

		movieDis1.appendChild(divVid);
	}

	containerDiv.appendChild(movieDis1);
}
