const API_KEY="WK2RhdG1JISjantAhrgzA5dtAXQ2"
// get all the upcomig matches
export const getMatches=()=>{
    const url=` https://cricapi.com/api/matches/?apikey=${API_KEY}`;
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :",error));
};

// load match details
export const getMatchdetail=(id)=>{
    const url=` https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("Error :",error));
}; 

