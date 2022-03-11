const jokeMain = document.getElementById('joke');
const genBtn = document.getElementById('jokeBtn');

window.addEventListener('load', generateJokes);
genBtn.addEventListener('click', generateJokes);

function generateJokes(){
    fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
    }
}).then(res => res.json()).then(data => jokeMain.innerHTML = data.joke)
}