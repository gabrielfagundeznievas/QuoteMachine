const content = document.querySelector('.content');
const author = document.querySelector('.author');
const changeId = document.querySelector('.changeId');
const twitter = document.querySelector('#twitter');
const bg = document.getElementsByTagName('body');
const block = document.getElementById('block');

changeId.addEventListener('click', () => {
    fetchQuotes();
    theme1 = random(0, 8);
    theme2 = random(0, 8);   
    
    bg[0].style.backgroundColor = color[theme1];
    // changeId.style.backgroundColor = color[theme2];
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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5345d00af2msh355246a20962086p177ad1jsn0a5b49b7beac',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
async function fetchQuotes(){
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