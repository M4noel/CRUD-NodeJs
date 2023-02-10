import mysql from "mysql"

const conexao = mysql.createConnection({
    host : 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bdhamburgueria'
})

export const consulta = (sql, valores ="", mensagemReject) => { 
    return new Promise((resolve, reject) =>{
        conexao.query(sql, valores,(error, result) => {
            if (error) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

conexao.connect()

export default conexao