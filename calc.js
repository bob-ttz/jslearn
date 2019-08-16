let startBtn = document.getElementById("start"),
p = document.getElementById('monthly_pay'),
months = document.getElementById('credit_term'),
percent = document.getElementById('int-rate'),
initFee = document.getElementById('init-fee'),
zp = document.getElementById('monthly_income'),
data = document.querySelector('.data'),
div3 = document.querySelector('.result'),
logs = document.querySelector(".logs > table"),
result, sum;

function isInteger(num) {
    if (num-Math.floor(num)==0 && num>0 && isNaN(num)===false){
      return true;
    } else {
      return false;
    }
  }

startBtn.addEventListener('click', function(){
    div3.id = 'result';
    if ( !isInteger(+(p.value)) || !isInteger(+months.value) || !isInteger(+percent.value) || !isInteger(+initFee.value) || !isInteger(+zp.value) || percent.value < 1 || percent.value > 100) {
        div3.innerHTML = "Проверьте правильность введенных данных";
        result = "Данные введены неверно";
        } else {
    perc = (percent.value / 100)/ 12;
    sum = (p.value*((Math.pow(1+perc,months.value))-1))/(perc*(Math.pow(1+perc,months.value))) - initFee.value;
    if ( parseInt(zp.value)*0.6 <= parseInt(p.value) || months.value < 12 || months.value > 360 || sum > 15000000 ) {
        data.style.backgroundColor = "#ffd748";
        div3.innerHTML = "Выбранные условия не соответствуют требованиям по кредиту";
        result = "Под вопросом";
        } else {
            data.style.backgroundColor = "#69e343";
            div3.innerHTML = `Вам доступен кредит на сумму: ${sum.toFixed()} руб.`;
            result = "Да";
            };
        };
    logs.innerHTML = `<tr><td>Ежемесячный платеж: ${p.value} руб.</td></tr>
                    <tr><td>Срок кредита: ${months.value} месяцев</td></tr>
                    <tr><td>Ставка: ${percent.value} %</td></tr>
                    <tr><td>Первоначальный взнос: ${initFee.value} руб.</td></tr>
                    <tr><td>Доход: ${zp.value} руб.</td></tr>
                    <tr><td>Ответ банка: ${result}</td></tr>`;
});