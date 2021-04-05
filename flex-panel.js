"use strict";

const panels = document.querySelectorAll('.panel');

/** Function handles click to add/remove 'open' class to panel */
function toggleOpen(){
  this.classList.toggle('open');
}

/** Function handles click to add/remove 'open-active' class to panel */
function toggleActive(evt){
  if (evt.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));