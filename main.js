/*
Создание элемента без использования html.
Есть метод createElement который принимает в качестве аргумента какой то тег.
Можно тег чем то наполнить через innerHTML.
*/
let div = document.createElement("div");
div.innerHTML = " hello world ! ";
// С помощью метода append можно вставить любой элемент в конец узла.
// Тоесть в конец узла body.
document.body.append(div);
// Теперь через метод prepend наш элемент встал перед script и в начале узла body.
// Тоесть в начало узла body.
document.body.prepend(div);

// Создаем li 1.3.5 (и потом 2.4 при помощи метода after / before).
let li1 = document.getElementById("li1");
    li3 = document.getElementById("li3");
    li5 = document.getElementById("li5");


let li2 = document.createElement("li"); //"li" с точкой.
    li4 = document.createElement("li");

li2.innerHTML = "2";
li4.innerHTML = "4";

li1.after(li2);
li5.before(li4);

// Так же можно удалить какой элемент внутри js, без использования html.
let div1 = document.getElementById("div1");
    div2 = document.getElementById("div2");
    div3 = document.getElementById("div3");
    btn = document.getElementById("btn");
// Воспользуемся структурой данных как массив.
// Div у нас все похожи по структуре и удобнее всего хранить в массиве.
let arr = [div1,div2,div3];

btn.onclick = function(){
    arr[0].remove()
    arr.splice(0,1); //по 1 удаляет и сдвигает.
};

// КЛОНИРОВАНИЕ УЗЛОВ.
// Чтобы склонировать какой то кусочек кода, не трогая html.
let divs = document.getElementById("divs")[0]; //возвращает псевдомассив, коллекцию html элементов ("div")[0].
let divs2 = div.cloneNode(true); // Есть копия "divs" но без paragraph (чтобы решить проблему ответ внизу).
/*
Чтобы произошло глубокое клонирование, а не только обертки за которую цепляемся.
То в качестве аргумента надо передать булево значение true.
*/
document.body.append(divs2);

// СТИЛИ И КЛАССЫ.
let divv = document.getElementById("divv");
let divvClass = divv.className; // Выводит (div-red). При помощи className мы можем поменять значение класса.
// Теперь без присванивания переменной так как className это свойство, то можно присваивать новые значения.
divv.className = "div-green"; // Вставляем новое значение без скобок, просто string.
// Старый класс убран, и заменен новым.

// Но чтобы добавить/удалить/проверить дополнительный класс, используем classList.
// Свойство classList - и у него есть несколько методов.
// 1. МЕТОД ADD - добавляет новый класс. В нашем случае меняем fz40px в классе .div-big.
divv.classList.add("div-green", "div-big", "div-red");

// 2. МЕТОД TOGGLE.
let btnList = document.getElementById("btn-classList");
btnList.addEventListener("click", function(){
divv.classList.toggle("div-green"); //toogle проверят, если класс есть он его удалит. Если нет то добавит.
}); // toogle понимает что div-green уже есть, поэтому при следующем клике он его удалит, и заменит на div-red. 

// 3 МЕТОД CONTAINS.
divv.classList.contains("div-red");
console.log(divv.classList.contains("div-red")); // true.

// 4 МЕТОД REMOVE.
divv.classList.remove("div-letter");

// ВСПЛЫТИЕ.
// Когда на элементе происходит событие, обработчик сначала срабатывает на нем, потом на его родителе,
// потом на родителе родителя и так далее вверх по цепочке. До самого document.
let divAscent = document.getElementById("div-ascent");
let pAscent = document.getElementById("p");
let ulAscent = document.getElementById("ul");
let liAscent = document.getElementById("liAscent");
// !!! Кликаем по li хотя повесили событие на div.
// Тоесть тут мы тыкнули сначала на li и по цепочке событие пошло наверх ul, div.
divAscent.addEventListener("click", function(event){
    alert("hello");
    console.log(this); // Так как вложены еще элементы, то this выводит тот элемент на котором висит обработчик.
    //  this (Текущий элемент до которого дошло событие).
    // Вывело div-ascent так можно узнать по какому элементу мы тыкнули.
    console.log(event.target); // Выводит точный целевой элемент по которому произвели клик.
    // !!! В ПАРАМЕТРЕ И НАЗВАНИЕ ПЕРЕМЕННОЙ НЕ ОБЯЗАТЕЛЬНО НАЗЫВАТЬ EVENT. МОЖНО КАК ХОЧЕШЬ. 
});

// EVENT.TARGET.
// Event.target это целевой элемент, а именно это тот элемент который вызывает событие.
// ТЕПЕРЬ ПОВЕСИМ ПРОСЛУШКА СОБЫТИЯ НА КАЖДЫЙ ИЗ ЭЛЕМЕНТОВ.

// МЕТОД STOP.PROPOGATION.
// По которому тыкнули по тому и споп дальше всплытие не пойдет, благодаря stop.propagation.
// pAscent.addEventListener("click", function(){
// console.log("События с p");
// });

// ulAscent.addEventListener("click", function(){
// console.log("События с ul");
// });

// liAscent.addEventListener("click", function(events){
//     events.stopPropagation();
// console.log("События с li");
// });

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ.
// Чтобы не вешать на каждый элемент по id, можно просто по клику определить и поставить событие.
let cubeWrapper = document.getElementById("cube-wrapper");

cubeWrapper.addEventListener("click", function(evt){
    let target = evt.target;
    target.classList.add("yellow");
    console.log(target);
});

// PREVENT.DEFAULT().
// Отменяет стандартные действия.
let link = document.getElementById("link");
link.onclick = function(evs) {
evs.preventDefault(link);
alert("click");
};

// ИНТЕРФЕЙСНЫЕ СОБЫТИЯ (МЫШИ).
let divvs = document.getElementById("divvs");
    divvsBtn = document.getElementById("divvs-btn");

divvs.addEventListener(`contextmenu`, function(){
    console.log("run");
});

let input = document.getElementById("input");

input.addEventListener("keydown", function(){
console.log("клавиша нажата"); //выводит клавиша нажата при каждом нажатии клавиши.
});

// КАК УЗНАТЬ КАКАЯ КЛАВИША НАЖАТА ?
// Так можно узнать какие клавиши нажал пользователь.
// event.key покажет что за клавиша нажата.
// А event.code покажет какой код у клавиши.
input.addEventListener("keydown", function(ets){
    let key = ets.key;
console.log(key);
});

input.addEventListener("keydown", function(ets){
    let code = ets.code; // если нажал f = KeyF.
console.log(code);
});

// ИНТЕРФЕЙСНЫЕ СОБЫТИЯ ФОРМЫ.
let inputTxt = document.getElementById("input-txt");
    textArea = document.getElementById("textarea");
    checkbox = document.getElementById("checkbox");
    formBtn = document.getElementById("form-btn");

formBtn.addEventListener("click", function(e){
    e.preventDefault();
console.log(textArea.value); // Через свойство value мы получаем значение элементов(из тех мест куда мы что то записываем). 
});

checkbox.addEventListener("click", function(e){
console.log(e.targed.checked); // Через свойство checked мы узнаем поставил ли пользователь галочку или нет. 
});

input.addEventListener("focus", function(e){
    console.log("run");
});

input.addEventListener("blur", function(e){ // Blur чтобы делать какую то рамочку
    console.log("run");
});

input.addEventListener("change", function(e){ // Событие Change срабатывает при любом окончании изменении.
    console.log("run");
});

input.addEventListener("change", function(e){ // Событие input срабатывает при любой изменении и работе.
    console.log("run");
});

input.addEventListener("copy", function(e){ // Событие copy срабатывает при ctrl + c.
    console.log("run");
});