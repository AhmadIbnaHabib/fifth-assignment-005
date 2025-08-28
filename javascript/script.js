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
let starButton = document.getElementById('balance')

let stars = 100;
let starNegative = 20;

callButton.forEach(function (btn) {
  btn.onclick = function () {
    if (stars > 0) {
      let serviceName = btn.getAttribute('data-service');
      let number = btn.getAttribute('data-number');
      stars -= starNegative;
      if (stars < 0) stars = 0;
      starButton.innerText = + stars;
      alert('service :' + serviceName + '\nNumber :' + number);
    } else {
      alert('⚠️ You don\'t have any ⭐ left! You cannot make more calls.')
    }
  }
})



let callButtons = document.querySelectorAll('.emergency-call');
let starBtn = document.getElementById('balance');
let historyCards = document.getElementById('history-cards');
let clearButton = document.getElementById('clear-history');

let star = 100;
let starNegativeSecond = 20;

callButtons.forEach(function (btn) {
  btn.onclick = function () {
    if (star > 0) {
      let serviceName = btn.getAttribute('data-service');
      let number = btn.getAttribute('data-number');

      star -= starNegativeSecond;
      if (star < 0) star = 0;
      starBtn.innerText = star;

      alert('Service : ' + serviceName + '\nNumber : ' + number);

      let aside = document.createElement('aside');
      aside.className = 'history-card flex justify-between p-[24px] items-center w-[380px] h-[83px] bg-[#FAFAFA] mx-auto rounded-[8px] mb-[8px]';
      aside.innerHTML = `
        <div>
            <h1 class="inter font-semibold text-[18px]">${serviceName}</h1>
            <p class="hind-madurai-light font-medium text-[18px] text-[#5C5C5C]">${number}</p>
        </div>
        <div class="hind-madurai-light font-medium text-[18px]">${new Date().toLocaleTimeString()}</div>
      `;

      historyCards.appendChild(aside);

    } else {
      alert("⚠️ You don't have any ⭐ left! You cannot make more calls.");
    }
  }
});

clearButton.onclick = function () {
  historyCards.innerHTML = '';
};


let copyCount = document.getElementById('copy-count');
let countNumber = 0;
let copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {

    let number = btn.closest('.card').querySelector('.copy-number').innerText;

    navigator.clipboard.writeText(number).then(() => {

    });

    countNumber++;
    copyCount.innerText = countNumber;
  });
});




