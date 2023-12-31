// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e21af745eamsh44682c7494b5202p1c438cjsn21559d5c81cf',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let bangaloreW = () => {
	// cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			b_1.innerHTML = response.cloud_pct
			b_2.innerHTML = response.feels_like
			b_3.innerHTML = response.humidity
			b_4.innerHTML = response.max_temp
			b_5.innerHTML = response.min_temp
			b_6.innerHTML = response.sunrise
			b_7.innerHTML = response.sunset
			b_8.innerHTML = response.temp
			b_9.innerHTML = response.wind_degrees
			b_10.innerHTML = response.wind_speed
		})

		.catch(err => console.log(err))
}

bangaloreW()

let kolkataW = () => {
	// cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			k_1.innerHTML = response.cloud_pct
			k_2.innerHTML = response.feels_like
			k_3.innerHTML = response.humidity
			k_4.innerHTML = response.max_temp
			k_5.innerHTML = response.min_temp
			k_6.innerHTML = response.sunrise
			k_7.innerHTML = response.sunset
			k_8.innerHTML = response.temp
			k_9.innerHTML = response.wind_degrees
			k_10.innerHTML = response.wind_speed
		})

		.catch(err => console.log(err))
}

kolkataW()

let chennaiW = () => {
	// cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			c_1.innerHTML = response.cloud_pct
			c_2.innerHTML = response.feels_like
			c_3.innerHTML = response.humidity
			c_4.innerHTML = response.max_temp
			c_5.innerHTML = response.min_temp
			c_6.innerHTML = response.sunrise
			c_7.innerHTML = response.sunset
			c_8.innerHTML = response.temp
			c_9.innerHTML = response.wind_degrees
			c_10.innerHTML = response.wind_speed
		})

		.catch(err => console.log(err))
}

chennaiW()

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



const getWeather = (city) => {
	cityName.innerHTML = city
	

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			
			// const b=response.sunset

			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp

			// sunrise.innerHTML = response.sunrise */
			const timeFormate1 = response.sunrise
			const date1 = new Date(timeFormate1 * 1000)
			
			// const hour = date.getHours()
			// const minutes = date.getMinutes()
			// const seconds = date.getSeconds()
			// sunrise.innerHTML = (`${hour}h,${minutes}m,${seconds}s`)*/

			const sunTime = date1.toLocaleTimeString()
			sunrise.innerHTML = sunTime

			const timeFormate2 = response.sunset
			const date2 = new Date(timeFormate2 * 1000)
			const sunSetTime = date2.toLocaleTimeString()


			sunset.innerHTML = sunSetTime
			temp.innerHTML = response.temp
			temp1.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed1.innerHTML = response.wind_speed
		})

		.catch(err => console.log(err))
}


submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

