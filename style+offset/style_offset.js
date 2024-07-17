// Работа со стилями в JavaScript.
// Если надо поменять стили из JavaScript то воспользуюсь styles...
// !!! Все свойства в CSS которые записываются через - в JS будует через camelCase.
// !!! После свойство = 50; JS не поймет что это, поэтому записываем в string = "50px";.
// ELEMENT STYLE.
let divt = document.getElementById("divt");
divt.style.fontSize = "50px";
divt.style.display = "none";

// GET COMPUTED STYLE.
// Для того чтобы получить текущее значение свойств которые прописал в css.
let style = getComputedStyle(divt);
console.log(style.color); //rgb(0, 128, 0).
console.log(style.fontSize);
console.log(style.fontStyle);

// СВОЙСТВО offsetParent.
// В свойстве offsetParent находится предок элемента, который используется внутри браузера при вычислении координат при рендеринге.
// !!! Все вычисления координат идут от body. 
// Чтобы получить родительский узел, воспользуемся parentNode.
let wrapper = document.getElementById("wrapper");
    cube = document.getElementById("cube");

    // Для wrapper и cube один и тот же предок = body. 
console.log(wrapper.offsetParent);
console.log(cube.offsetParent);

// Свойства offsetLeft / offsetTop.
// Эти свойства содержат координаты x/y относительно верхнего левого угла offsetParent.
// !!! В ДАННЫЙ МОМЕНТ ДЛЯ ЭЛЕМЕНТОВ WRAPPER / CUBE offsetParent ЯВЛЯЕТСЯ BODY, ПОЭТОМУ ОТНОСИТЕЛЬНО BODY.
console.log(wrapper.offsetTop); //414 (Расстояние до нашего body, включая margin).
// Если убрать body margin: 0; то расстояние 406.
console.log(wrapper.offsetLeft); //8.
console.log(cube.offsetTop);
console.log(cube.offsetLeft);

// Свойства offsetWidth / offsetHeight.
// Эти свойства содержат полный размер элемента.
console.log(wrapper.offsetWidth); // 450 width (включая padding).
console.log(wrapper.offsetHeight); // 450 height.
console.log(cube.offsetWidth); // 200.
console.log(cube.offsetHeight); // 200.

// Свойства clientTop / clientLeft.
// Эти свойства заработают если у нас будут рамки у элемента. Если же там будет еще полоса прокрутки,
// то она также попадет в это свойство.
console.log(wrapper.clientTop); // 0 (изначально, затем добавил border 10 px) и выводит 10.
console.log(wrapper.clientLeft); // 0.

// Свойства clientWidth / clientHeight.
// Это свойства, размер области внутри рамок.
console.log(wrapper.clientWidth); // 450 (показывает чистую ширину элемента без рамок, тоесть border).
console.log(wrapper.clientHeight); // 450.


// Свойства scrollWidth / scrollHeight.
// Высота и ширина прокрутки.
console.log(cube.scrollHeight); // 828 (Высота всего скролла в тексте).
console.log(cube.scrollWidth); // 200 (Ширина всего скролла в тексте).

// Свойства scrollLeft / scrollTop.
// Высота прокрученной на данный момент части элемента.
// ПОЛЬЗОВАТЕЛЬ ПРОКРУТИЛ ДО КУДА ТО НАЖАЛ НА КНОПКУ MOVE UP И НА САМОЕ НАЧАЛО СКРОЛЛА ВЕРНУЛСЯ.
let cubeBtn = document.getElementById("cube-btn");
cubeBtn.addEventListener("click", function(){
cube.scrollTop = cube.scrollTop - cube.scrollTop;
// cube.ScrollTop = текущий cube.scrollTop на котором остановились и вычесть саму себя cube.scrollTop.
});

console.log(cube.scrollLeft); // 0.
console.log(cube.scrollTop);

// Применим событие и функцию чтобы прике на полосу прокрутки,
// чтобы у нас выдавало координаты прокрутки на данный момент.
cube.addEventListener("scroll", function(){
console.log(cube.scrollTop);
});

// pageYOffset получаем текущее значени нашего окна браузера.
console.log(window.pageYOffset);

