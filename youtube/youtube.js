let searchBtn = document.querySelector('.navbar__center__search-btn');

searchBtn.addEventListener('click', displayMovie);

async function displayMovie() {
	let video = document.querySelector('.navbar__center__input').value;

	let res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyCRtsr9RbTDPUjvEVXteKP-P7sUbCfTe4M&maxResults=20`
	);

	let data = await res.json();

	console.log('data:', data);
	let movieDis = document.querySelector('#movieDisplay');

	for ({ id: { videoId } } of data.items) {
		let video_frame = document.createElement('iframe');
		let divVid = document.createElement('div');

		video_frame.src = `https://www.youtube.com/embed/${videoId}`;

		video_frame.allow = 'fullscreen';

		divVid.appendChild(video_frame);

		movieDis.appendChild(divVid);
	}
}
