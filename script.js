let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;

const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

//variable declaration over

searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
});

const getWeather=async (city)=>{

    //const proxy="https://cors-anywhere.herokuapp.com/";
    //const api=`${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7a3722a7f830bed01dfaa9618631f65`;
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7a3722a7f830bed01dfaa9618631f65`;
    fetch(api).then((response)=>{
        return response.json();
    })

    .then(data=>{
        const{name}=data;//location
        const{feels_like}=data.main;//temperature
        const{id,main}=data.weather[0];//climate

        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like -273);
        //to convert in celsius

    //refer to api doc =>condition=>weather=>condition
    //we gonna use id for differenet icons;
    // in api id>200 and <300 belong to thunderstorm and this way we have many
    
    if(id>=200 && id<300)
    {
        tempicon.src="./icons/thunderstorm.svg";
    }
    else if(id>=300 && id<500)
    {
        //drizzle
        tempicon.src="./icons/cloudy.png";
    }
    else if(id>=500 && id<600)
    {
        //rain
        tempicon.src="./icons/raining.png";
    }
    else if(id>=600 && id<700)
    {
         //snow
         tempicon.src="./icons/snowflake.png";
    }
    else if(id>=700 && id<750)
    {
       //clear
       tempicon.src="./icons/haze.png";

    }
    else
    {
        tempicon.src="./icons/sun.png";
    }
        console.log(data);//to show how we have here main fells like and so one
    })
}
    /*
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7a3722a7f830bed01dfaa9618631f65`,{
            mode :'cors'
        });

        const weatherdata=await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherdata.main;
        const{id,main}=weatherdata.weather[0];

        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);

                    //we gonna use id for differenet icons;
            // in api id>200 and <300 belong to thunderstorm and this way we have many
            
            if(id>=200 && id<300)
            {
                tempicon.src="./icons/thunderstorm.svg";
            }
            else if(id>=300 && id<500)
            {
                //drizzle
                tempicon.src="./icons/cloudy.png";
            }
            else if(id>=500 && id<600)
            {
                //rain
                tempicon.src="./icons/raining.png";
            }
            else if(id>=600 && id<700)
            {
                 //snow
                 tempicon.src="./icons/snowflake.png";
            }
            else
            {
               //clear
               tempicon.src="./icons/sun.png";

            }


            
    }
    catch(error)
    {
        alert("City Not found");
    }*/
//};








// firstly we gonna get for our current location
//if user allow us to acces current location

window.addEventListener("load",()=>{
    //means when page loaded on window do this function;
    //here we will give defination of the function
    
    let long;//for longitude
    let lat;//for latitude


    if(navigator.geolocation)//if user aloow to use current location
    {
        //it gives latitude and logitude of current location

         navigator.geolocation.getCurrentPosition((position)=>{
             
             long=position.coords.longitude;//longitude
             lat=position.coords.latitude;//latitude
             //const proxy="https://cors-anywhere.herokuapp.com/";
             //const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d7a3722a7f830bed01dfaa9618631f65`;
             const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d7a3722a7f830bed01dfaa9618631f65`
            //open weather api to get weather from lattitude and longitude

            fetch(api).then((response)=>{
                return response.json();
            })
         //it fetches the data from api in form of object named as response
            .then(data=>{
                const{name}=data;//location
                const{feels_like}=data.main;//temperature
                const{id,main}=data.weather[0];//climate

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like -273);
                //to convert in celsius

            //refer to api doc =>condition=>weather=>condition
            //we gonna use id for differenet icons;
            // in api id>200 and <300 belong to thunderstorm and this way we have many
            
            if(id>=200 && id<300)
            {
                tempicon.src="./icons/thunderstorm.svg";
            }
            else if(id>=300 && id<500)
            {
                //drizzle
                tempicon.src="./icons/cloudy.png";
            }
            else if(id>=500 && id<600)
            {
                //rain
                tempicon.src="./icons/raining.png";
            }
            else if(id>=600 && id<700)
            {
                 //snow
                 tempicon.src="./icons/snowflake.png";
            }
            else if(id>=700 && id<750)
            {
                tempicon.src="./icons/haze.png";
            }
            else
            {
               //clear
               tempicon.src="./icons/sun.png";

            }
                console.log(data);//to show how we have here main fells like and so one
            })
         })
            
    }
})