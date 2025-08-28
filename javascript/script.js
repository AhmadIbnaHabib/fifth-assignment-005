let count = 0;

let heartBtn = document.querySelectorAll('.click-heart');
let countHeart = document.getElementById('count-heart');

heartBtn.forEach(function (button) {
  button.onclick = function () {
    count++
    countHeart.innerText = count;
  }
})

let callBtn = document.querySelectorAll('.emergency-call');

callBtn.forEach(function (btn) {
  btn.onclick = function () {
    let serviceName = btn.getAttribute('data-service');
    let number = btn.getAttribute('data-number');
    alert('service :' + serviceName + '\nNumber :' + number);
  }
})

let callButton = document.querySelectorAll('.emergency-call');
let coinButton = document.getElementById('balance')

let coin = 100;
let coinNegative = 20;

callButton.forEach(function (btn) {
  btn.onclick = function () {
    if (coin > 0) {
      let serviceName = btn.getAttribute('data-service');
      let number = btn.getAttribute('data-number');
      coin -= coinNegative;
      if (coin < 0) coin = 0;
      coinButton.innerText = + coin;
      alert('' + serviceName + '' + number);
    } else {
      alert('⚠️ You don\'t have any coins left! You cannot make more calls.')
    }
  }
})


let coinB = 100;
let coinNegativeSecond = 20;

let callButtons = document.querySelectorAll('.emergency-call');
let coinBtn = document.getElementById('balance');
let historyCards = document.getElementById('history-cards');
let clearButton = document.getElementById('clear-history');

callButtons.forEach(function (btn) {
  btn.onclick = function () {
    if (coin > 0) {
      let serviceName = btn.getAttribute('data-service');
      let number = btn.getAttribute('data-number');

      coin -= coinNegativeSecond;
      if (coin < 0) coin = 0;
      coinBtn.innerText = coin;

      alert('📞Calling' + serviceName + '' + number);

      let aside = document.createElement('aside');
      aside.className = 'history-card flex justify-between p-[24px] items-center w-[380px] h-[83px] bg-[#FAFAFA] mx-auto rounded-[8px] mb-[8px]';
      aside.innerHTML = `
        <div>
            <h1 class="inter font-semibold text-[18px] <br>">${serviceName}</h1>
            <p class="hind-madurai-light font-medium text-[18px] text-[#5C5C5C]">${number}</p>
        </div>
        <div class="hind-madurai-light font-medium text-[18px]">${new Date().toLocaleTimeString()}</div>
      `;
      historyCards.appendChild(aside);

    } else {
      alert("⚠️ You don't have any coins left! You cannot make more calls.");
    }
  }
});
clearButton.onclick = function () {
  historyCards.innerHTML = '';
};

let countNumber = 0;
let copyCount = document.getElementById('copy-count');
let copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {

    let number = btn.closest('.card').querySelector('.copy-number').innerText;

    navigator.clipboard.writeText(number).then(() => {

    });

    countNumber++;
    copyCount.innerText = countNumber;
  });
});




