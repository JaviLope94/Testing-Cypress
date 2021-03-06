// Extension cypress Cypress Scenario Recorder

describe('Mis primeros test', () => { // Mocha

    // it('Conocimiento la sintaxis', () => { // Mocha
    //     expect(true).to.equal(true) // Chai
    // })

    // it('Probando un error', () => {
    //     expect(true).not.to.equal(false)
    // })

    /* Una prueba sólida generalmente cubre 3 fases:
    *
    *   1º Configurar el estado de la aplicación.
    *
    *   2º Realizar una acción.
    *
    *   3º Hacer una afirmación, tanto positiva como negativa sobre
    *   el resultado de la prueba
    */

    // it('Visits una página', () => {
    //     cy.visit('https://www.elmundo.es/')
    // })

    // it('Consultar un elemento', () => {
    //     cy.visit('https://www.elmundo.es/')

    //     cy.contains('mundo')
    // })

    // it('Consultar un elemento - error', () => {
    //     cy.visit('https://www.elmundo.es/')

    //     cy.contains('supercampeon')
    // })

    // it('Hacer click en un elemento', () => {
    //     cy.visit('https://www.elmundo.es/')

    //     cy.contains('Tecnología').click()
    // })

    // it('Hacer click en un elemento y realizar una afirmación', () => {
    //     cy.visit('https://www.elmundo.es/')

    //     cy.contains('Tecnología').click()

    //     // Ejemplo mala sintaxis
    //     cy.url().should('https://www.elmundo.es/') // Comando y asserción

    //     cy.url().should('include', 'tecnologia')
    // })

    // it('Obtener un elemento por su clase', () => {
    //     cy.visit('https://www.elmundo.es/')

    //     cy.get('.ue-c-main-navigation__link-dropdown-icon').first()

    //     cy.get('#js-firstLevel > li:nth-child(9) > a')

    // })

    // it('Obtener un input y proporcionarle un valor', () => {

    //     cy.visit('https://example.cypress.io')

    //     cy.contains('type').click()

    //     cy.url().should('include', '/commands/actions')

    //     cy.get('.action-email')
    //         .type('everis@everis.com')
    //         .should('have.value', 'everis@everis.com')
    // })

    // it('Acceder a un sitio bloqueado', () => {

    //     cy.visit('https://es-es.facebook.com/')
    // })

    //  it('Hacer click en un elemento y realizar una afirmación', () => {
    //     cy.visit('https://www.elmundo.es/')

    //     cy.contains('Tecnología').click()

    //     cy.pause()

    //     // cy.debug()

    //     // debugger

    //     cy.url().should('include', 'tecnologia')
    // })

    // it('Timeout', () => {
    //     cy.visit('https://www.elmundo.es/')

    //     // Give this element 10 seconds to appear
    //     cy.get('.my-slow-selector', { timeout: 10000 })
    // })

    /* Los comandos son asincronos */

    // it('comando asincronos y secuenciales', () => {
    //     cy.visit('https://as.com/')   // 1

    //     cy.get('body > footer').should('be.visible');  // 2

    //     cy.get('div > div')
    //         .find('h1')
    //         .click({ force: true }); // 3
    // })

    // it('Forzar force true && viewport', () => {

    //     cy.viewport(400, 400)

    //     cy.visit('https://as.com/')

    //     cy.get('#hds > div > div.hds-scrollH > div > div.nav-tools > ul > li.bt-hds-user-wr > a').click() // Añadir force true
    // })

    // it('Añadiendo Javascript', () => {

    //     cy.visit('https://as.com/')

    //     cy.get('#hds > div > div.hds-scrollH > div > nav.nav-ppal > ul > li.it-futbol > a').click({force: true})

    //     cy.get('body > nav > div > ul.nav-seccion-menu > li:nth-child(1) > a').should('be.visible');
    //     var trueVar = cy.get('body > nav > div > ul.nav-seccion-menu > li:nth-child(1) > a').click()

    //     if (trueVar) {
    //         cy.url().should('eq', 'https://as.com/futbol/primera.html');

    //         cy.get('body > div.modulo-escudos.modulo-escudos-futbol-primera.cf > div > ul > li:nth-child(1)').should('be.visible');
    //     }
    // })


    // describe('Ciclo de vida de los test', () => {

    //     // Se ejecuta una única vez antes de todos los it.
    //     before(() => {
    //     })

    //     // Se ejecuta una única vez después de todos los it.
    //     after(() => {
    //     })

    //     // Se ejecuta una vez antes de cada it.
    //     beforeEach(() => {
    //         // Restablecer los valores de la base de datos y inicializarla con unos valores
    //         cy.exec('npm run db:reset && npm run db:seed')

    //         // Añadir un valor a la base de datos en la prueba
    //         cy.request('POST', '/test/seed/post', {
    //             title: 'First Post',
    //             authorId: 1,
    //             body: '...'
    //         })

    //         // Crear un usuario en la base de datos con una configuración especifica
    //         cy.request('POST', '/test/seed/user', { name: 'Jane' }).its('body').as('currentUser')
    //     })

    //     // Se ejecuta una vez despueés de cada it.
    //     afterEach(() => {
    //         // Restablecer los valores de la base de datos
    //         cy.exec('npm run db:reset')
    //     })

    //     it('successfully loads', () => {
    //         cy.visit('/')
    //     })

    // })

    // describe('Demostración promesas', () => {

    //     it('Sin cypress', () => {
    //         // Este código no es valido, es una demostración

    //         return cy.visit('/my/resource/path')
    //             .then(() => {
    //                 return cy.get('.awesome-selector')
    //             })
    //             .then(($element) => {
    //                 // not analogous
    //                 return cy.click($element)
    //             })
    //             .then(() => {
    //                 return cy.url()
    //             })
    //             .then((url) => {
    //                 expect(url).to.eq('/my/resource/path#awesomeness')
    //             })
    //     })

    //     it('En cypress', () => {
    //         cy.visit('/my/resource/path')

    //         cy.get('.awesome-selector')
    //             .click()

    //         cy.url()
    //             .should('include', '/my/resource/path#awesomeness')
    //     })
    // })



    
})

