/**
 * 
 * 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement)
 * 
 * 
 */
//1
const arr=[1,5,7,9];
console.log(Math.min(...arr));

//2
function createCounter (counter){

return{
    increment: ()=>{counter++;},
    decrement: ()=>{counter--},
rezult:function(){return counter;}

}

}
var x=new createCounter(11);
x.increment(); 
console.log(x.rezult());
x.decrement(); 
console.log(x.rezult());
x.decrement();
console.log(x.rezult());

//3
function findElementByClass (root,classname){
    if(typeof root==document.ELEMENT_NODE){
if(findElementByClass(root.childNodes,classname))
{ 
    const rootElement=document.getElementById(root);
    return rootElement;
}

    }
    else if (typeof root == document.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
      }
    
}
findElementByClass('root', 'my-class');

