alert('Bine ati venit!');
function determineZodiac() {
    var month = parseInt(document.getElementById('luna').value);
    var day = parseInt(document.getElementById('data').value);
  
    var zodiacSign = '';
  
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      zodiacSign = 'Varsator';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      zodiacSign = 'Pesti';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      zodiacSign = 'Berbec';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      zodiacSign = 'Taur';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      zodiacSign = 'Gemeni';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      zodiacSign = 'Rac';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      zodiacSign = 'Leu';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      zodiacSign = 'Fecioara';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      zodiacSign = 'Balanta';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      zodiacSign = 'Scorpion';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      zodiacSign = 'Sagetator';
    } else {
      zodiacSign = 'Capricorn';
    }
  
    document.getElementById('zodia').innerHTML = zodiacSign;
  }
  
  var button = document.querySelector('button');
  button.addEventListener('click', determineZodiac);
  
  