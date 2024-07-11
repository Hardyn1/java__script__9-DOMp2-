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
