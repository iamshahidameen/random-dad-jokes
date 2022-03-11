const jokeMain = document.getElementById('joke');
const genBtn = document.getElementById('jokeBtn');

window.addEventListener('load', generateJokes);
genBtn.addEventListener('click', generateJokes);

// function generateJokes(){
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             'Accept': 'application/json'
//     }
// }).then(res => res.json()).then(data => jokeMain.innerHTML = data.joke)
// }

async function generateJokes(){
    const config = {
        headers: {
            'Accept': 'application/json'
    }
};
    const apiRes = await fetch('https://icanhazdadjoke.com',config)
    
    const data = await apiRes.json();
    jokeMain.innerHTML = data.joke
}

