/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
window.onload=function(){
/*
 * Define Global Variables
 * 
*/
let mySections=document.querySelectorAll('section');
let myUI=document.getElementById('navbar__list');
let myFragment=document.createDocumentFragment();
let burgermenu=document.getElementById('navbar__menu');
/**
 * End Global Variables
 
 */
 

// build the nav
	const navBarCreator = () => {
    
for(const section of mySections){
const myli=document.createElement('li');
const mylink=document.createElement('a');
mylink.setAttribute('href',`#${section.id}`);
mylink.classList.add('menu__link');
mylink.textContent=section.getAttribute('data-nav');
myli.appendChild(mylink);
myFragment.appendChild(myli);
}	
myUI.appendChild(myFragment);
	}
	
navBarCreator();

//implementating the activation function

const activation=()=>
{
for(const section of mySections){
const topPosition=section.getBoundingClientRect().top;
if(myView=()=> topPosition<150 && topPosition>=-150){
    section.classList.remove('your-active-class');
	section.style.cssText="background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
		if (myView()){
	section.classList.add('your-active-class');
	section.style.cssText="background-color:black;";
		}
	
}

}
}
window.addEventListener('scroll',activation)


// Scroll to anchor ID using scrollTO event
function myScrolling(e){
e.preventDefault();
const myTarget= document.querySelector(`[data-nav="${e.target.textContent}"]`);
myTarget.scrollIntoView({behavior:'smooth',block:'center'});
}

	myUI.addEventListener('click',myScrolling);



 const toggleView=()=>
 {
	var x=document.getElementById('navbar__list');
	if(x.style.display==='block'){
		x.style.display="none";
	
	

	}else{
		x.style.display='block';
	
	}

}
toggleView();










/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


}