// Agrandissement des images au clic (fermeture : clic ou touche Échap)
var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('figure img,.hero img').forEach(function(i){i.addEventListener('click',function(){li.src=i.src;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
