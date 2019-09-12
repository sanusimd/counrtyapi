console.log("aboki me");
// const input = document.querySelector(".search").value = "";
// console.log(input)
let allCountries = [];

function countryData() {
fetch("https://restcountries.eu/rest/v2/all") //Get Data from Api
  .then(resp => resp.json()) // Transform the data into json

  .then(data => {
    //    console.log(data)
    let countryLists = "";
    allCountries = data;
    
    data.forEach(countries => {
      countryLists += `
        <div class="box">
            <div class="img-box">
                <img src="${countries.flag}">
            </div>

            <div class="country-info">
                 <h1 class="heading"> ${countries.name}</h1>
                <p>Population:<span class="population">${countries.population}</span> </p>
               <p>Region: <span class="region">${countries.region}</span></p>
                 <p>Capital:<span class="capital">${countries.capital}</span></p>
             </div>
        </div>
        `
       
        // let filterName = countries
        // console.log(filterName)

        // filterData()
      
        // filterName.filter((nameFilter)=>{
        //   const name = nameFilter.toLowerCase()
        //   name= name.includes('z')
        //   return name
        // });
    });

  document.querySelector(".countries").innerHTML = countryLists;
  // 

  })

  .catch(() => console.log("error somewhere"));
};
countryData()

function filterData(search){

//   fetch("https://restcountries.eu/rest/v2/name/an") //Get Data from Api
//   .then(resp => resp.json()) // Transform the data into json

//   .then(data => {
// console.log(data)
       
//  })
  const data = allCountries.filter(country => country.name.toLowerCase().startsWith(search))
  countryLists = ''
  document.querySelector(".countries").innerHTML = countryLists;
  data.forEach(country => {
    countryLists += `
        <div class="box">
            <div class="img-box">
                <img src="${country.flag}">
            </div>

            <div class="country-info">
                 <h1 class="heading"> ${country.name}</h1>
                <p>Population:<span class="population">${country.population}</span> </p>
               <p>Region: <span class="region">${country.region}</span></p>
                 <p>Capital:<span class="capital">${country.capital}</span></p>
             </div>
        </div>
        `
  })
  document.querySelector(".countries").innerHTML = countryLists;

} 
// filterData()
document.getElementById('search').addEventListener('keyup', (e) => {
  console.log('hello', e.target.value)
  filterData(e.target.value)
})






