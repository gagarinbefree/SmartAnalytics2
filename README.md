# SmartAnalytics 2 
Тестовое задание для SmartAnalytics (www.sm-analytics.com)  
<b>Произведен рефакторинг</b>   
Для запуска открыть solution в Visual Studio 2017  
Дождаться загрузки всех зависимостей  
Запустить под IIS Express  
Технологический стек
Typescript, React, Redux, .NET
Описание задачи
Реализовать одностраничное приложения для управления заметками.
Frontend
Заметка представляет из себя прямоугольную область со следующими атрибутами:
1.	Заголовок, текст заголовка может редактироваться.
2.	Тело заметки, текст может редактироваться.
3.	Цвет заметки, возможность менять цвет заметки из доступного набора (минимум три цвета)
Приложение позволяет:
1.	добавлять новые заметки, 
2.	менять атрибуты заметок, редактировать текст, менять цвет,
3.	менять положение заметки на экране с помощью перетаскивания (drag&drop),
4.	удалять заметки
Backend
Состояние приложения (набор заметок, атрибуты заметок и их расположение на экране) должны быть сохранены в базе данных в backend части так, чтобы при повторном открытии или обновлении страницы состояние приложения корректно восстанавливалось.
Сохранение может происходить либо прозрачно для пользователя, либо по явному действию (например, клик по кнопке).

