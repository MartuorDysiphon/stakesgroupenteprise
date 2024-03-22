import Typed from 'typed.js';

function changeNumber(id) {
    var randomNumber = Math.floor(Math.random() * 100); 
    document.getElementById(id).textContent = randomNumber; 
  }
  
  setInterval(function() {
    changeNumber('item1');
  }, 150); 
  
  setInterval(function() {
    changeNumber('item2');
  }, 200); 
  
  setInterval(function() {
    changeNumber('item3');
  }, 100); 
  
  setInterval(function() {
    changeNumber('item4');
  }, 50); 
  
  setInterval(function() {
    changeNumber('item5');
  }, 100); 
  
  setInterval(function() {
    changeNumber('item6');
  }, 50); 
  
  setInterval(function() {
    changeNumber('item7');
  }, 50); 
  
  setInterval(function() {
    changeNumber('item8');
  }, 50); 


  document.addEventListener('click', function(e) {
    if (e.target.matches('.next')) {
      const slider = document.querySelector('.slider');
      const items = document.querySelectorAll('.item');
      slider.appendChild(items[0]);
    } else if (e.target.matches('.prev')) {
      const slider = document.querySelector('.slider');
      const items = document.querySelectorAll('.item');
      slider.insertBefore(items[items.length - 1], items[0]);
    }
  });
  

  
  document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('.multiple-text', {
      strings: ['Crafting Innovation through Generative Systems.'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  });