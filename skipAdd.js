const new__btn = document.createElement("button"); 
const new__text = document.createTextNode("Skip add");
new__btn.appendChild(new__text); 

const element = document.querySelector("#top-level-buttons-computed"); 
element.appendChild(new__btn); new__btn.classList.add('new_btn') 
new__btn.addEventListener('click', func => { 
  var elem = document.querySelector('.ytp-ad-skip-button') 
  if (elem) { document.querySelector('.ytp-ad-skip-button').click() 
  console.log("t.me/WNDKND") } else { alert("There are no ads here | Здесь рекламы нет") } })


new__btn.style.paddingBottom = "6px" new__btn.style.fontWeight = "bold" 
new__btn.style.textTransform = "uppercase" new__btn.style.fontsize = "20px" 
new__btn.style.background = "none" 
new__btn.style.border = "none" 
new__btn.style.color = "white" 
new__btn.style.cursor = "pointer"
