import conexao from "../database/conexao.js";
import IngredieteRepository from "../repositories.js/IngredieteRepository.js";

class IngredienteController{

    async store  (req, res) {
        const ingrediente = req.body
        const row = await IngredieteRepository.create(ingrediente)
        res.json(row)
    }

     async index  (req, res) {
        const row = await IngredieteRepository.findAll()
        res.json(row)
     }

     async  show (req, res) {
        const id = req.params.id
        const row = await IngredieteRepository.findById(id)
        res.json(row)
     }

    async  update (req, res) {
        const ingrediente = req.body
        const id = req.params.id
        const row = await IngredieteRepository.update(ingrediente,id)
        res.json(row)
       
        
        
    }
    
    async delete (req, res) {
        const id = req.params.id
        const row = await IngredieteRepository.delete(id)
        res.json(row)
}

}
export default new IngredienteController




