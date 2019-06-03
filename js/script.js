'use strict';
function titleClickHandler(event){
	event.preventDefault();
	const clickedElement = this;
	
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
	
	/* [DONE] find the correct article using the selector (value of 'href' attribute) */
	const selectedArticle = document.getElementById(articleID);  
	
	/* [DONE] add class 'active' to the correct article */
	selectedArticle.classList.add('active');
}

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(customSelector = ''){
	
	/* [ DONE ] remove contents of titleList */
	const titleLinks = document.querySelector(optTitleListSelector);
	titleLinks.innerHTML = '';
	
	/* [ DONE ] for each article */
	const articles = document.querySelectorAll(optArticleSelector + customSelector);
	for(let article of articles) {
		
		/* [ DONE ] get the article id */
		const articleID = article.getAttribute('id');
	
		/* [ DONE ] find the title element */

		/* [ DONE ] get the title from the title element */
		const articleTitle = article.querySelector(optTitleSelector).innerHTML;

		/* [ DONE ] create HTML of the link */
		const articleLink = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';

		/* [ DONE ] insert link into titleList */
		titleLinks.innerHTML += articleLink;
		
	}
	const links = document.querySelectorAll('.titles a');

	for(let link of links){
		link.addEventListener('click', titleClickHandler);
	}

}

generateTitleLinks();

function generateTags(){
	/* find all articles */
	const articles = document.querySelectorAll('article');

	/* START LOOP: for every article: */
	for (let article of articles) {

		/* find tags wrapper */
		const tagList = article.querySelector(optArticleTagsSelector);

		/* make html variable with empty string */
		let html = '';

		/* get tags from data-tags attribute */
		const rawTags = article.getAttribute('data-tags');
		
		/* split tags into array */
		const tagArray = rawTags.split(" ");
		
		/* START LOOP: for each tag */
		for (let tag of tagArray) {
			/* generate HTML of the link */
			const tagLink = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

			/* add generated code to html variable */
			html += tagLink;

		/* END LOOP: for each tag */
		}

		/* insert HTML of all the links into the tags wrapper */
		tagList.innerHTML = html;

	/* END LOOP: for every article: */
	}
}

generateTags();

function tagClickHandler(event){
	/* prevent default action for this event */
	event.preventDefault();

	/* make new constant named "clickedElement" and give it the value of "this" */
	const clickedElement = this;

	/* make a new constant "href" and read the attribute "href" of the clicked element */
	const href = clickedElement.getAttribute('href');

	/* make a new constant "tag" and extract tag from the "href" constant */
	const tag = href.substr(5); 

	/* find all tag links with class active */
	const activeTagLinks = document.querySelectorAll('.post-tags .list li a.active, ul.tags li a.active'); 

	/* START LOOP: for each active tag link */
	for (let activeTagLink of activeTagLinks) {

		/* remove class active */
		activeTagLink.classList.remove('active');

	/* END LOOP: for each active tag link */
	}

	/* find all tag links with "href" attribute equal to the "href" constant */
	const hrefSelector = '.post-tags .list li a[href="' + href + '"], ul.tags li a[href="' + href + '"]';
	const currentTagLinks = document.querySelectorAll(hrefSelector);

	/* START LOOP: for each found tag link */
	for (let currentTagLink of currentTagLinks) {

		/* add class active */
		currentTagLink.classList.add('active');

	/* END LOOP: for each found tag link */
	}

	/* execute function "generateTitleLinks" with article selector as argument */
	generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
	/* find all links to tags */
	const tagLinks = document.querySelectorAll('.post-tags .list li a, ul.tags li a');

	/* START LOOP: for each link */
	for (let tagLink of tagLinks) {

		/* add tagClickHandler as event listener for that link */
		tagLink.addEventListener('click', tagClickHandler);

	/* END LOOP: for each link */
	}
}

addClickListenersToTags();


// .querySelector jest w czymś lepszy w tej sytuacji? - line 30


/* 
tab vs double-space
jestem mocno przyzwyczajony do taba
czy możliwe, że to będzie stanowiło problem w jakiejś sytuacji?
javascript.info twierdzi, że większość używa double-space
*/