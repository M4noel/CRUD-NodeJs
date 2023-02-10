import { consulta } from "../database/conexao.js";

class IngredieteRepository {

    create(ingrediente) {
        const sql = "INSERT INTO `bdhamburgueria'`.`ingredientes` SET ?;";
      return  consulta(sql,ingrediente, 'Nao foi possivel criar' )
      
    }

    findAll() {
        const sql = "SELECT * FROM `bdhamburgueria'`.ingredientes;";
        return consulta(sql, 'Nao foi possivel listar' )
    }

    findById(id){
        const sql = "SELECT * FROM `bdhamburgueria'`.ingredientes WHERE ID=?;";
        return consulta(sql, id, 'Nao foi possivel encontrar' )
    }

    update(ingrediente, id){  
        const sql = "UPDATE`bdhamburgueria'`.ingredientes SET ?  WHERE ID=?;";
        return consulta(sql,[ingrediente, id], 'Nao foi possivel alterar' )
    }
delete(id){
    const sql = "DELETE  FROM `bdhamburgueria'`.ingredientes WHERE id=?;";
    return  consulta(sql, id, 'Nao foi possivel deletar' )
    
      
}
}



export default new IngredieteRepository()