let btn = document.getElementById('btn');
const apiKey = '/5CeoPVSSMNDXNMdgtvoJA==D4Y7e5mr3mF2IzL4';
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
let joke = document.getElementById('joke');

btn.addEventListener('click', getjoke);

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};

async function getjoke(){
     try {
    joke.innerText = "Updating...";
    btn.disabled = true;
    btn.innerText = "Loading...";
   const responce = await fetch(apiUrl, options)
   const data = await responce.json();
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
   joke.innerText = data[0].joke;
     } 
     catch (error) {
            joke.innerText = "An error happened, try again later.";
            btn.disabled = false;
            btn.innerText = "Tell me a joke";}
}
