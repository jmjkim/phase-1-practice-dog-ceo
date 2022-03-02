console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {    

    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
    const breedUrl ='https://dog.ceo/api/breeds/list/all';

    // Fetching JSON data from a given URL and executes a callback function.
    function fetchJson(url, callback) {
        fetch(url)
            .then(res => res.json())
            .then(callback)
            .catch(err => console.log(err));
    } 


    // Challenge 1 
    function displayImages(data) {
        data.message.forEach(url => {
            const img = document.createElement('img');
            img.setAttribute('src', url);
            document.getElementById('dog-image-container').appendChild(img);
        })
    }
    fetchJson(imgUrl, displayImages)


    // Challenge 2
    function displayBreeds(data) {
        for ([key, value] of Object.entries(data.message)) {
            const li = document.createElement('li');

            li.innerText = `${key}: ${value}`;
            document.getElementById('dog-breeds').appendChild(li);

            // Challenge 3 
            li.addEventListener('click', () => {
                li.classList.toggle('liColor');
            })
        }
    }
    fetchJson(breedUrl, displayBreeds)


    // Challenge 4
    function dropdownSelection(data) {
        const dropdown = document.getElementById('breed-dropdown');
        const ul = document.getElementById('dog-breeds')
        dropdown.addEventListener('change', e => {
            ul.innerHTML = '';

            const optionValue = e.target.value;
            Object.keys(data.message).forEach(element => {
                const firstLetter = element.charAt(0);
                
                if (optionValue === firstLetter) {
                    const li = document.createElement('li');
                    li.textContent = element;
                    document.getElementById('dog-breeds').appendChild(li);
                }})
            })
        }
        fetchJson(breedUrl, dropdownSelection)
    })
        


