describe('Mis primeros test', () => {

    it('Visitar correos', () => {
        cy.visit('https://www.correos.es/ss/Satellite/site/pagina-inicio/info')
    })

    // Buscar el enlace que te lleve a -> BUSCA EL CÓDIGO POSTAL  . 
    it('Mi primer flujo', () => {
        // Comprobar si el enlace es visible

        // Hacer click en el enlace. Anteriormente si habeis copiado el selector a traves de chrome con la opcion copy selector os saldra un error, Os doy una pista este es su selector : div:nth-child(2) > div > #titHerr > a

        // Comprobar que la nueva url es la siguiente: https://www.correos.es/ss/Satellite/site/aplicacion-1349167812778-herramientas_y_apps/detalle_app-sidioma=es_ES 

        // Comprobar que la url incluye: la palabra herramientas

        // Comprobar que el formulario con nombre "Busqueda de localidades por código postal" existe y es visible

        // Obtener el selector del input y añadir el código postal 28937

        // Completar el formulario y pasar a la siguiente fase

        // Comprobar que se ha abierto una tabla y tiene el valor Madrid

        // Volver a la home de correos

        // Enhorabuena has testeado tu primer flujo

    })

    // Nos vemos con confianza?

    // Ahora sin ayuda guiada, desde la home de correos hay que acceder al calculador de tarifas y realizar los pasos y comprobaciones necesarias para 
    // completar el flujo, y.... todo lo que se te ocurra. Al finalizar muestranoslo!
    it('', () => {

    })




})