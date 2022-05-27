jQuery(document).ready(function( $ ){
    'use strict';

/*  ==========================================
					• CONTACTO 
	==========================================	*/
    const error = $('#error');
    const campo = $('.campo input');
    const nombre = $('#nombre');
    const email = $('#mail');
    const telefono = $('#celular');
    const mensaje = $('#mensaje');
    const enviar = $('#enviar');

    nombre.on('blur', validarCampo);
    telefono.on('blur', validarCampo);
    mensaje.on('blur', validarCampo);
    email.on('blur', validarMail);
    enviar.click(validarFormulario);

    function validarMail(){
        if(email.val() == ''){
            $(this).css({
                'border-color': 'red',
                'box-shadow': '0 0 10px rgba(255, 0, 0, .5)'
            });
            error.text('No olvides llenar este campo');
            error.fadeIn(1000);
            } else if(email.val().indexOf('@') == -1 || email.val().indexOf('.') == -1){
                $(this).css({
                    'border-color': 'red',
                    'box-shadow': '0 0 10px rgba(255, 0, 0, .5)'
                });
                error.text('El contenido del campo no es valido');
                error.fadeIn(1000);
            }
    }

    function validarCampo(){
        
        if($(this).val() == ""){
            error.text('No olvides llenar este campo');
            error.fadeIn(1000);
            $(this).css({
                'border-color': 'red',
                'box-shadow': '0 0 10px rgba(255, 0, 0, .5)'
            });
        } else {
            error.fadeOut(1000);
            $(this).css({
                'border-color': 'transparent',
                'box-shadow': '0 0 10px rgba(0, 255, 0, .5)'
            } )
        }       
    };

    function validarFormulario(){
        for (let i = 0; i < mensaje.length; i++) {
            const mensajes = mensaje[i];
            
            if (mensajes.value == '' > 0) {
                mensajes.style.borderColor = 'red';
                mensajes.style.boxShadow = '0 0 1rem rgba(255, 0, 0, .5)';
                error.text('No olvides llenar este campo');
                error.fadeIn(1000);
                return false
            } 
        }

        for (let i = 0; i < campo.length; i++) {
            const campos = campo[i];
            
            if (campos.value == '' > 0) {
                campos.style.borderColor = 'red';
                campos.style.boxShadow = '0 0 1rem rgba(255, 0, 0, .5)';
                error.text('No olvides llenar este campo');
                error.fadeIn(1000);
                return false
            } 
        }

    }

/*  ==========================================
					// CONTACTO 
	==========================================	*/

});