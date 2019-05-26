'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */
	const activeLinks = document.querySelectorAll('.titles a.active');
	for(let activeLink of activeLinks) {
		activeLink.classList.remove('active');
	}

  /* [DONE] add class 'active' to the clicked link */
	clickedElement.classList.add('active');


  /* [DONE] remove class 'active' from all articles */
	const activeArticles = document.querySelectorAll('.posts article.active');
	for(let activeArticle of activeArticles) {
		activeArticle.classList.remove('active');
	}

  /* [DONE] get 'href' attribute from the clicked link */
	let articleID = clickedElement.getAttribute("href");
	articleID = articleID.substr(1); // tu błąd w opisie zadania czy liczyliście na problem solvin' ? :D
	console.log(articleID);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
	const selectedArticle = document.getElementById(articleID);  // .querySelector jest w czymś lepszy w tej sytuacji?
	console.log(selectedArticle);

  /* [DONE] add class 'active' to the correct article */
	selectedArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

/* 
tab vs double-space
jestem mocno przyzwyczajony do taba
czy możliwe, że to będzie stanowiło problem w jakiejś sytuacji?
javascript.info twierdzi, że większość używa double-space
*/