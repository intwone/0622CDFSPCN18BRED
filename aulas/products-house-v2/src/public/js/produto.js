console.log('Start Produto JS');

const accordions = document.querySelectorAll('.accordion');
const stockStatus = document.querySelector('#stock');

if(stockStatus.textContent.toLowerCase() === 'em estoque') {
    stockStatus.style.color = "green";
    stockStatus.style.fontWeight = 'bold'
} else {
    stockStatus.style.color = "red";
    stockStatus.style.fontWeight = 'bold'
}

accordions.forEach(accordion => {
    accordion.addEventListener('click', handleAccordionClick);
});

function handleAccordionClick(event) {
    console.log('clicou')
    const accordion = event.target;
    const expand = accordion.querySelector('span');

    if(accordion.classList.contains('active')) {
        accordion.classList.remove('active');
        expand.textContent = 'expand_more';
    } else {
        accordion.classList.add('active');
        expand.textContent = 'expand_less';
    }

    const panel = this.nextElementSibling;
    panel.style.display === 'block' ? panel.style.display = 'none' : panel.style.display = 'block';
    
}