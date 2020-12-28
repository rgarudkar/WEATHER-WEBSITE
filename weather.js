var search = document.querySelector('.search input');
var btn = document.querySelector('button');
btn.addEventListener('click', () => {
	fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+search.value+'.json?access_token=pk.eyJ1IjoiYW5jaGl0YWdhcndhbCIsImEiOiJjazluOTI5NXcwNHFkM2dwY3lzYnBnaXhoIn0.LyMxtcAV03F9eqQCMc4PyQ&unit=1').then((res) => {
		return res.json();
		}).then((data) => {
		const long = data.features[0].center[0];
		const lat = data.features[0].center[1];
		console.log(data.features[0].place_name);
		var name = document.querySelector('#name');
		name.textContent = data.features[0].place_name;
		console.log(long, lat);
		fetch('http://api.weatherstack.com/current?access_key=b14f3b4560befc881867064b969faa61&query='+lat+','+long+'&unit=m').then((res) => {
		return res.json();
	}).then((data) => {
		console.log(data.current.temperature);
		var temp = document.querySelector('#temp');
		temp.textContent = data.current.temperature;
		var desc = document.querySelector('#desc');
		desc.textContent = data.current.weather_descriptions[0];
		var humid = document.querySelector('#humid');
		humid.textContent = data.current.humidity;
		var ws = document.querySelector('#ws');
		ws.textContent = data.current.wind_speed;
		var isd = document.querySelector('#isd');
		if(data.current.is_day === 'yes')
		{
			isd.textContent = 'day';
		}
		else
		{
			isd.textContent = 'night';
		}
		
		var ps = document.querySelector('#ps');
		ps.textContent = data.current.precip;
		var prs = document.querySelector('#prs');
		prs.textContent = data.current.pressure;
	})
 })
	})