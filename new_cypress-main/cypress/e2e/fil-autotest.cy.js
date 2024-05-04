describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').click();
         
        
})
it('Восстановления пароля', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('filipp@fil.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').click();
})
 it('Неверный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('Dosun123');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').click();
})
it('Верный пароль и неверный логин', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('Filippbang@mail.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').click();
})
it('Верный пароль и логин без @', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').click();
})
it('Ошибка валидации', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').click();
})
})
describe('Покупка аватара', function () {                               // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
         cy.get('input[type="email"]').type('USER_LOGIN');      // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');    // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click();                  // кликаем по кнопке Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });
 