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