export function fetchCountries(name) {
    const BASE_URL = "https://restcountries.com/v3.1/"
    return fetch(
      `${BASE_URL}name/${name}?`
    )
      .then(response => {        
          if (response.ok) {            
              return response.json();
            }
              return Promise.reject('Error 404');
          
      })    
  } 