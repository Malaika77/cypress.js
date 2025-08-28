describe("Проверка авторизации", function () {
  it("Верный логин и верный пароль", function () {
    cy.visit("https://login.qa.studio/"); // Зашли на сайт
    cy.get("#forgotEmailButton").should("have.css", "color", "rgb(0, 85, 152)"); // Проверка цвета кнопки (Забыли пароль?)

    cy.get("#mail").type("german@dolnikov.ru"); // Ввели верный логин
    cy.get("#pass").type("qa_one_love1"); // Ввели верный пароль
    cy.get("#loginButton").click(); // Нажали кнопку входа

    cy.get("#messageHeader").contains("Авторизация прошла успешно"); // Проверяю, что после авторизации вижу текст
    cy.get("#messageHeader").should("be.visible"); // Текст виден пользователю
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Есть крестик и он виден для пользователя
  });

  it("Верный логин и неверный пароль", function () {
    cy.visit("https://login.qa.studio/"); // Зашли на сайт
    cy.get("#forgotEmailButton").should("have.css", "color", "rgb(0, 85, 152)"); // Проверка цвета кнопки (Забыли пароль?)

    cy.get("#mail").type("german@dolnikov.ru"); // Ввели верный логин
    cy.get("#pass").type("qa_one_love7"); // Ввели неверный пароль
    cy.get("#loginButton").click(); // Нажали кнопку входа

    cy.get("#messageHeader").contains("Такого логина или пароля нет"); // Проверяю, что вижу текст
    cy.get("#messageHeader").should("be.visible"); // Текст виден пользователю
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Есть крестик и он виден для пользователя
  });

  it("Проверка, что в логине есть @", function () {
    cy.visit("https://login.qa.studio/"); // Зашли на сайт
    cy.get("#forgotEmailButton").should("have.css", "color", "rgb(0, 85, 152)"); // Проверка цвета кнопки (Забыли пароль?)

    cy.get("#mail").type("germandolnikov.ru"); // Ввели логин без символа @
    cy.get("#pass").type("qa_one_love1"); // Ввели верный пароль
    cy.get("#loginButton").click(); // Нажали кнопку входа

    cy.get("#messageHeader").contains("Нужно исправить проблему валидации"); // Проверяю,что вижу текст
    cy.get("#messageHeader").should("be.visible"); // Текст виден пользователю
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Есть крестик и он виден для пользователя
  });

  it("Проверка восстановления пароля", function () {
    cy.visit("https://login.qa.studio/"); // Зашли на сайт
    cy.get("#forgotEmailButton").should("have.css", "color", "rgb(0, 85, 152)"); // Проверка цвета кнопки (Забыли пароль?)

    cy.get("#forgotEmailButton").click(); // Нажали кнопку (Забыли пароль?)
    cy.get("#mailForgot").type("german@dolnikov.ru"); // Ввели почту для восстановления
    cy.get("#restoreEmailButton").click(); // Нажали кнопку (Отправить код)

    cy.get("#messageHeader").contains("Успешно отправили пароль на e-mail"); // Проверяю, что вижу текст
    cy.get("#messageHeader").should("be.visible"); // Текст виден пользователю
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Есть крестик и он виден для пользователя
  });

  it("Неверный логин и верный пароль", function () {
    cy.visit("https://login.qa.studio/"); // Зашли на сайт
    cy.get("#forgotEmailButton").should("have.css", "color", "rgb(0, 85, 152)"); // Проверка цвета кнопки (Забыли пароль?)

    cy.get("#mail").type("german@dolnikov1.ru"); // Ввели неверный логин
    cy.get("#pass").type("qa_one_love1"); // Ввели верный пароль
    cy.get("#loginButton").click(); // Нажали кнопку входа

    cy.get("#messageHeader").contains("Такого логина или пароля нет"); // Проверяю, что вижу текст
    cy.get("#messageHeader").should("be.visible"); // Текст виден пользователю
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Есть крестик и он виден для пользователя
  });

  it("Проверка, на приведение к строчным буквам в логине", function () {
    cy.visit("https://login.qa.studio/"); // Зашли на сайт
    cy.get("#forgotEmailButton").should("have.css", "color", "rgb(0, 85, 152)"); // Проверка цвета кнопки (Забыли пароль?)

    cy.get("#mail").type("gerMan@dolnikov.ru"); // Ввели верный логин с большой буквы M
    cy.get("#pass").type("qa_one_love1"); // Ввели верный пароль
    cy.get("#loginButton").click(); // Нажали кнопку входа

    cy.get("#messageHeader").contains("Авторизация прошла успешно"); // Проверяю, что вижу текст
    cy.get("#messageHeader").should("be.visible"); // Текст виден пользователю
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Есть крестик и он виден для пользователя
  });
});
