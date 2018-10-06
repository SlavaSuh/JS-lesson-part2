// 1. У вас есть большой текст, в котором для обозначения диалогов используются одинарные кавычки. 
// Придумать шаблон, который меняет одинарные кавычки на двойные.
// 2. Улучшить шаблон таким образом, чтобы конструкции типа aren’t не меняли одинарную
//  кавычку на двойную.
const parag = document.getElementsByTagName("p")[0].textContent;
const newParag = document.getElementsByClassName("new-parag")[0];
var reg = /(\s')|('\s)/gim;   //   /'(?=\s) | '(?!\s)/
newParag.textContent = parag.replace(reg, '"');
