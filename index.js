const kylaniaSection = document.getElementById('kylania');
const peilinSection = document.getElementById('peilin');
const imaniSection = document.getElementById('imani');
const marvinSection = document.getElementById('marvin');
const chrisSection = document.getElementById('chris');

kylaniaSection.addEventListener("click", function() {
    kylaniaSection.style.backgroundColor = 'lightblue';
});

peilinSection.addEventListener("click", function() {
    peilinSection.style.backgroundColor = 'lightyellow'; 
});

imaniSection.addEventListener("click", function() {
    imaniSection.style.backgroundColor = 'purple';
});

marvinSection.addEventListener("click", function() {
    marvinSection.style.backgroundColor =' rgba(22, 255, 205, 1)';
});


chrisSection.addEventListener("click", function() {
    chrisSection.style.backgroundColor = 'rgb(189, 25, 25)';
});
