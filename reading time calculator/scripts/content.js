const article = document.querySelector('article');

if(article) {
    const text = article.textContent;
    const wordMatchExp = /[^/s]+/g;
    const words = text.matchAll(wordMatchExp);
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount/200);
    const badge = document.createElement('p');
    badge.classList.add('color-secondary-text', 'type--caption')
    badge.textContent=`⏱️ ${readingTime} min read`;

    const heading = article.querySelector('h1');
    const date = article.querySelector('time')?.parentNode;

    (date ?? heading).insertAdjacentElement('afterend', badge);
}

chrome.commands.onCommand.addListener((command) => { console.log(`Command: ${command}`);});