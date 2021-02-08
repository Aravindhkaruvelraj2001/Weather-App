function main()
{

var result1=document.querySelector('#nameResult')
var result2=document.querySelector('#temperatureResult')


var button=document.querySelector('#submit-btn')




button.addEventListener('click',()=>{

	//Get user input
	var searchlocation=document.querySelector('#input-location');
 
	var location=searchlocation.value;

	//Get User Location temperature
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=5b0af557f8aab671b07f394df917bf68')

	.then(function response(response)
	{
	
		return response.json()
	})

	.then(data=>{
		
		//convert temperature kelvin to celcius and temperature variable
		temperature=data.main.temp-273.15
		
		//print h3 tag
		result1.innerHTML=temperature+' <sup>.</sup>C ('+data.weather[0].description+')'
		result2.textContent=data.name
	})

	.catch(err=>{
		alert("wrong city Name! or check your internet connection...")
		
	})

})


}

//load js files after rendered html and css
 window.onload=main;