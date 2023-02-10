import express  from 'express'
import IngredienteController from "./app/controllers/IngredienteController.js"
const app = express()

app.use(express.json())


//Listar todos os Ingredientes 
app.get('/ingredientes', IngredienteController.index)
//Add ingredientes
app.post('/ingredientes',IngredienteController.store)
//Buscar ingredientes por Id
app.get('/ingredientes/:id', IngredienteController.show)
//delete ingredientes
app.delete('/ingredientes/:id', IngredienteController.delete)
//update ingredientes
app.put('/ingredientes/:id', IngredienteController.update )

export default app



