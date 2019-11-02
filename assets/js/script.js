var table = document.getElementById('table');
document.querySelector('button').addEventListener('click', function(){
var text = table.textContent;
var languages = text.split(',');
alert(languages.indexOf('C-Sharp'));
});