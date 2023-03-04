/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */ 
/* let session =  new Map(); */
let session = {}

/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession(){
    // Сохраним время начала сессии
    //session.set("startDate", new Date().toLocaleString())
    if (window.sessionStorage.getItem("startDate")==null)
    {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString());
    }

    if (window.sessionStorage.getItem("userAgent")==null)
    {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent);
    }
    if (window.sessionStorage.getItem("age")==null)
    {
        window.sessionStorage.setItem("age", prompt('Введите возраст'))
        checkAge(true)
    }
    else {
        checkAge(false);
    }
    
}

/*
* Проверка возраста пользователя
* 
* */
function checkAge(newSession){

    if(window.sessionStorage.getItem("age") >= 18){

        if(newSession)
        alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + new Date().toLocaleString() );
    }

    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
}
}


/*
* Вывод данных сессии в консоль
* 
* */
let sessionLog = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"))
    console.log('Возраст пользователя: : ' + window.sessionStorage.getItem("age"))
    }


/*
* Функция для фильтраци контента
* Будет вызываться благодаря атрибуту oninput на index.html
* 
* */

function filterContent(){
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




