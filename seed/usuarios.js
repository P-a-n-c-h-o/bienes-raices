import bcrypt from 'bcrypt'

const usuarios = [
    {
        nombre: 'Pancho',
        email: 'pancho@pancho.com',
        confirmado: 1,
        password: bcrypt.hashSync('password',10)
    }
]

export default usuarios