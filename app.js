const content = document.querySelector('.content');
const author = document.querySelector('.author');
const changeId = document.querySelector('.changeId');
const twitter = document.querySelector('#twitter');
const bg = document.getElementsByTagName('body');
const block = document.getElementById('block');

changeId.addEventListener('click', () => {
    fetchQuotes();
    fetchImage();
    theme1 = random(0, 8);
    theme2 = random(0, 8);   

    while(theme1 == theme2){        
        theme2 = random(0, 8);
    }

    bg[0].style.backgroundColor = color[theme1];
    changeId.style.backgroundColor = color[theme2];
    // block.style.backgroundColor = color[theme2];
    
    // Quitar foco
    changeId.blur();
});

let color = [
   '#95b8f6',
   '#add5fa',
   '#f9d99a',
   '#f9a59a',
   '#fa5f49',
   '#516091',
   '#74bec1',
   '#adebbe',
   '#eef3ad'
];

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};


async function fetchQuotes(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5345d00af2msh355246a20962086p177ad1jsn0a5b49b7beac',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    try {
        const res = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options);
        const data = await res.json();

        content.innerHTML = `<i class="fa-solid fa-quote-left fs-2"></i>  ${data.content}  <i class="fa-solid fa-quote-right fs-2"></i>`;
        author.innerHTML  = "- " + data.originator.name;

    } catch (error) {
        console.log(error);
    }
};

fetchQuotes();


async function fetchImage(){
    const number = random(1, 25);
    const res = await fetch(`https://pixabay.com/api/?key=12602951-82448af3d3c4a1073e4b4ce5e&q=nature&page=${number}`);
    const data = await res.json();

    const photoSrc = document.querySelector("#photoSrc");

    photoSrc.src = data.hits[random(0, 19)].largeImageURL;
}

fetchImage();