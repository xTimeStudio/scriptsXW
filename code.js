var spectator = document.getElementById('spec');
var auCrown = document.getElementById('auto-crown');
var steal = document.getElementById('steal');
var itemsByC = document.getElementById('255-items');
var xray = document.getElementById('xray');
var discord = document.getElementById('discord-server');


discord.addEventListener('click', dF);

function dF() {
    window.open('https://discord.gg/92tkwghu')
}


spectator.addEventListener('click', spF);
auCrown.addEventListener('click', auCF);
steal.addEventListener('click', sF);
itemsByC.addEventListener('click', iF);
xray.addEventListener('click', xF);
function spF() {
    window.open('https://direct-link.net/183156/Spectator')
}
function auCF() {
    var src = 1;
    if(src == 0 ) {
        alert('AUTO-CROWN is currently not availbe')
    }
    window.open('https://direct-link.net/183156/Autocrown')
}
function sF() {
    var src = 1;
    if(src == 0) {
        alert('STEAL is currently not avaible');
    }
    window.open('https://direct-link.net/183156/Stealchest')
}
function iF() {
    var src = 1;
    if(src==0) {
        alert('IS NOT AVAIBLE');
    }
    window.open('https://direct-link.net/183156/255iteminchest')
}
function xF() {
    window.open('https://cdn.discordapp.com/attachments/533636798312611861/785129083280949248/Xray.txt')
}