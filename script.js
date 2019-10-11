'use strict'

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let expense1 = prompt('Введите обязательную статью расходов в этом месяце'),
koks1 = prompt('Во сколько обойдется?'),
    expense2 = prompt('Введите обязательную статью расходов в этом месяце'),
    koks2 = prompt('Во сколько обойдется?');
let appData = {
    byudget: money,
    timeData: time, 
    expenses: { 
        expense1: 
        expense2
           },
 
   optionalExpenses: {},
   income : [],
   saving : false
};
appData.expenses.expense1=koks1; 
appData.expenses.expense2=koks2;
 
alert(appData.byudget/30);

