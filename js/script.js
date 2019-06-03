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
	let articleID = clickedElement.getAttribute('href');
	articleID = articleID.substr(1); 
	console.log(articleID);

	/* [DONE] find the correct article using the selector (value of 'href' attribute) */
	const selectedArticle = document.getElementById(articleID);  
	console.log(selectedArticle);

	/* [DONE] add class 'active' to the correct article */
	selectedArticle.classList.add('active');
}

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';

function generateTitleLinks(){

	/* [ DONE ] remove contents of titleList */
	const titleLinks = document.querySelector(optTitleListSelector);
	titleLinks.innerHTML = '';

	/* [ DONE ] for each article */
	const articles = document.querySelectorAll(optArticleSelector);
	for(let article of articles) {

		/* [ DONE ] get the article id */
		const articleID = article.getAttribute('id');
		console.log('id: ' + articleID);
	
		/* [ DONE ] find the title element */

		/* [ DONE ] get the title from the title element */
		const articleTitle = article.querySelector(optTitleSelector).innerHTML;
		console.log('title: ' + articleTitle);

		/* [ DONE ] create HTML of the link */
		const articleLink = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
		console.log(articleLink);
		console.log('-');
		

		/* [ DONE ] insert link into titleList */
		titleLinks.innerHTML += articleLink;
		
	}
	const links = document.querySelectorAll('.titles a');

	for(let link of links){
		link.addEventListener('click', titleClickHandler);
	}

}

generateTitleLinks();





// .querySelector jest w czymś lepszy w tej sytuacji? - line 30


/* 
tab vs double-space
jestem mocno przyzwyczajony do taba
czy możliwe, że to będzie stanowiło problem w jakiejś sytuacji?
javascript.info twierdzi, że większość używa double-space
*/