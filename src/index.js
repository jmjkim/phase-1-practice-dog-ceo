console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {    

    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
    const breedUrl ='https://dog.ceo/api/breeds/list/all';

    function challengeOne() {
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => data.message.forEach(url => {
            const img = document.createElement('img');
            img.setAttribute('src', url);
            document.getElementById('dog-image-container').appendChild(img);
        }))
        .catch(err => console.log(err));
    } 
    // challengeOne()




    function challengeTwo() {
        fetch(breedUrl)
            .then(res => res.json())
            .then(data => {
            
                for ([key, value] of Object.entries(data.message)) {
                    const li = document.createElement('li');
                    li.innerText = `${key}: ${value}`;
                    document.getElementById('dog-breeds').appendChild(li);

                    // Challenge 3 
                    li.addEventListener('click', e => e.target.setAttribute('style', 'color: blue;'));
                }
            })
            .catch(err => console.log(err));
        }
        // challengeTwo()




    function challengeFour() {
        fetch(breedUrl)
            .then(res => res.json())
            .then(data => {
                const dropdown = document.getElementById('breed-dropdown');

                dropdown.addEventListener('change', e => {
                    const optionValue = e.target.value;
                    
                    Object.keys(data.message).forEach(element => {
                        const firstLetter = element.charAt(0);
        
                        if (optionValue === firstLetter) {
                            const li = document.createElement('li');
                            li.textContent = element;
                            document.getElementById('dog-breeds').appendChild(li);
                        }})
                    })
            })
            .catch(err => console.log(err));
        }
        challengeFour()

    })
        


