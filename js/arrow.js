const $arrow = document.querySelector('.arrow');
$arrow.animate([
    {top: '5px'},
    {top: '-8px'},
    {top: '5px'}
],{
    duration: 700,
    iterations: Infinity
});
