/**
 * 
 * Урок 4. Асинхронность в Javascript
Домашнее задание

""Получение данных о пользователе""

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *
// Пример использования функции
const user = {
name: 'John Smith',
age: 30,
email: 'john@example.com'
};


saveUserData(user)
.then(() => {
console.log('User data saved successfully');
})
.catch(error => {
console.log(error.message);
});

saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
 * 
 * 
 */
//1

 function getUserData(id){
  
const user=
    fetch("https://jsonplaceholder.typicode.com/users/"+id) 
    .then((response) => response.json())
    .then((user) => {
        if(!user.id){console.log("Пользователь не найден!")};
      console.log("Имя пользователя: "+user.name+"\n эмейл: "+user.email); 
    console.log("\n Адрес пользователя");
    console.log(user.address);
    })
    console.log(user);
    return user;
    
}

   getUserData(3);


   //2
function saveUserData(user){

    let request = fetch('index.html',{method:"Post",user});
    request.then(( )=> {
        console.log("Внесли данные" );
      })
      .catch(() => {
        
        console.log( "Не удалось внести данные" );
      })

}

saveUserData(getUserData(3));

   

//3

let position = 0;
let velocity = 3;

function changeStyleDelayed(){
  
    
    const container = document.getElementById("container");
    const ball =document.getElementById("ball");
    position += velocity;
    ball.style.top=position+"px";
    const containerHeight = container.clientHeight;
    const ballHeight = ball.clientHeight;
    if (position <= 0 || position >= containerHeight - ballHeight) {
        // Если мяч попал в верхнюю или нижнюю часть, изменяем его скорость на обратную
        velocity = -velocity;
      }
      setTimeout(changeStyleDelayed,100);



}

function changeStyleDelayed1(){
  
    
    const container = document.getElementById("container");
    const ball =document.getElementById("ball1");
    position += velocity;
    ball.style.top=position+"px";
    const containerHeight = container.clientHeight;
    const ballHeight = ball.clientHeight;
    if (position <= 0 || position >= containerHeight - ballHeight) {
        // Если мяч попал в верхнюю или нижнюю часть, изменяем его скорость на обратную
        velocity = -velocity;
      }
      setTimeout(changeStyleDelayed1,100);



}

function changeStyleDelayed2(){
    const ball =document.getElementById("ball");
    const ball1 =document.getElementById("ball1");
    ball.style.top=0;
  ball1.style.top=0;
position=1;
  
}



 