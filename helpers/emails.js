import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:'465',

        auth: {
            user: 'appjobsypf@gmail.com',
            pass: 'axfgfgydiblbpygg'
        },

    });


    const { email, nombre, token } = datos

    // Enviar Email
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu cuenta en BienesRaices.com',
        text: 'Confirma tu cuenta en BienesRaices.com',
        html: `
            <p>Hola ${nombre}, comprueba tu cuenta en bienesRaices.com</p>
              
            <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace: <a href="">Confirmar Cuenta</a> </p> 
            
            <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje </p>
        `
    })

}

const emailOlvidePassword = async (datos) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:'465',
        auth: {
            user: 'appjobsypf@gmail.com',
            pass: 'axfgfgydiblbpygg'
        },
    });

    const { email, nombre, token } = datos

    // Enviar Email
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Reestablece tu Password en BienesRaices.com',
        text: 'Confirma tu cuenta en BienesRaices.com',
        html: `
            <p>Hola ${nombre}, has solicitado reestablecer tu cuenta en bienesRaices.com</p>
              
            <p>Sigue el siguiente enlace para generar tu password nuevo: <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}"> Reestablecer Password</a> </p> 
            
            <p>Si tú no solicitaste el cambio de password, puedes ignorar el mensaje </p>
        `
    })

}




export {
    emailRegistro,
    emailOlvidePassword
}