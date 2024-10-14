const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

// function generateJoke() {
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then((response) => response.json())
//         .then(data => {
//             jokeElement.innerHTML = data.joke;
//         })
// }

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    const response = await fetch("https://icanhazdadjoke.com/", config)

    const data = await response.json()

    jokeElement.innerHTML = data.joke;
}