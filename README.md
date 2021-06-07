# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Ссылка_на_проект](https://vladuhanov.nomoredomains.icu/movies-explorer/movies)

## Комментарии к работе: Этап JS

* Profile. Кнопка "Редактировать" при загрузке компонента не активна. Форма сразу доступна для изменения данных. При изменении данных кнопка меняет стили, и подменяется на кнопку Сохранить. Если данные не валидны - снова меняется на недоступную.

* PageNotFound - Обратная ссылка срабатывает только после второго клика

![image](https://user-images.githubusercontent.com/63239096/120971189-68525e00-c77d-11eb-9c59-75e7faf563d2.png)


## Этап верстки
### Главная:

* Логотип - ссылка на главную
* Ссылки шапки ведут на соответствующие модули.
* Функционал по регистрации и авторизации не сделан, поэтому на Главной всегда присутствуют две ссылки
* Реализован плавный скролл на соответствующие секции по ссылкам якорям
* Ссылки в разделе Портфолио пока ведут на один и тот же репозиторий.
* Ссылки в разделе Студент и подвала ведут на главные Практикума, Гит и Фуйсбука.

## Регистрация и Вход:

* При заполнении форм валидными значениями происходит редирект на роут /movies.
* Пароли - минимум 8 символов

## Фильмы:

* При нажатии на кнопку поиск, на странице появляется модуль прелоадер. При повторном нажатии - появляются фильмы.
* Чекбокс интерактивный
* Карточки фильмов предзаполняются из подготовленного массива (фотографии и значение сохраненного фильма, в соответствии с макетом). 
* Отметка Сохранить фильм интерактивная. Никаких действий за сменой цвета кнопки не следует.

## Сщхраненные фильмы

* функционал такой же как на Фильмы
* По макету 4 карточки, но заполнил полностью из того же массива.




