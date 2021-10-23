

const express = require('express')
const router = express.Router()
const { connect } = require('../database.js') 
const db = connect()

const TODOS = 'todos'

//ENDPOINTS:

//GET /todos -> array med alla todoobject
router.get('/', async(req, res) => { 
    let array = await getAll()
    if (array) {
        res.status(200).send(array)
    } else {
        res.sendStatus(404)
    }
})


//GET /todo/:id -> todo med ett specifikt id. 404 om inget objekt med detta id finns.
router.get('/:id', async(req, res) => { 
    let maybeTodo = await getOne(req.params.id)
    if (maybeTodo) {
        res.status(200).send(maybeTodo) 
    } else {
        res.sendStatus(404)
    }
})

//POST /todo -> req.body: todo-objekt utan id. respons: objekt med id som skapas i db 
router.post('/', async(req, res) => {
    let body = await req.body
	console.log(body);
	const dateString = new Date()
    
    if (!isTodoObject(body, 'every')) {
        res.sendStatus(400)
    } else {
	body.checked=false
	body.added= dateString
    let newTodo = await addOne( body )
    
    res.status(200).send(newTodo)
    }
    
})

//PUT todo/:id -> req.body: obj med ändringar. respons: statuskod
router.put('/:id', async(req, res) => {
    let isTodo = await getOne(req.params.id)
    let maybeTodo = req.body
    try {
        //kontrollera att todo med angivet id finns
        if (!isTodo) {
            res.sendStatus(404)
        //kontrollera att body är okej valideringsfunktion
        }else if (!isTodoObject(maybeTodo, 'some')) {
            res.sendStatus(400)
        } else {
        await updateOne(req.params.id, maybeTodo)
        res.sendStatus(200)
        }
    } catch (error) {
        console.log('error: ', error);
    }
    
})

//DELETE todo/:id -> respons: status
router.delete('/:id', async(req, res) => {
    let array = await deleteOne(req.params.id)
    if (array) {
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
})



//FUNCTIONS

//validering, kontrollerar att det är ett korrekt todoobjekt
const isTodoObject = (body, option) => {
    //BODY IS OBJECT ?
    if ( (typeof body) !== 'object' ) {
        return false 
    }

	console.log(body);

    let newTodoKeys = ['name', 'time']
	let updateTodoKeys = ['name', 'time', 'checked']
	let numberKeys = ['time']
	let stringKeys = ['name']
	let booleanKeys = ['checked']
	

    let values = Object.values(body)
    let keys = Object.keys(body) 
    //kontrollera att keys är korrekta, post= alla keys, put= minst en key
    let newTodoKeysExist = newTodoKeys.every( key => keys.includes(key) )
    let updateTodoKeysExist = updateTodoKeys.some( key => keys.includes(key) )
	
    //ny array med siffror, ny med strängar
    if ( !newTodoKeysExist && updateTodoKeysExist ) {
        numberKeys = keys.filter(key => numberKeys.includes(key))
        stringKeys = keys.filter(key => stringKeys.includes(key))
		booleanKeys = keys.filter(key => booleanKeys.includes(key))
    }
    
    //kontrollerar types
    let numberType = numberKeys.every(key=> {
        return typeof body[key] === 'number' && body[key] >= 0
    })

    let stringType = stringKeys.every(key=> {   
        return typeof body[key] === 'string'
    })

	let booleanType = booleanKeys.every(key => typeof body[key]==='boolean')

    //kontrollerar att inga values är tomma
    let noEmptyValues = values.every( x => x.toString().length > 0 )

    //POST
    if ( option === 'every' ) {
        return numberType && stringType && noEmptyValues && newTodoKeysExist
    //PUT
    } else if ( option === 'some' ) {
        return numberType && stringType && booleanType && noEmptyValues && updateTodoKeysExist
    }
}



//GET
const getAll = async() => {
	const todosRef = db.collection(TODOS)
	const todoSnapshot = await todosRef.get()
	if( todoSnapshot.empty ) {
		return []
	}
	const array = []
	await todoSnapshot.forEach(async docRef => {
		const data = await docRef.data()
		data.id = docRef.id
		array.push(data)
	})
    return array
}


const getOne = async(id) => {
    const docRef = db.collection(TODOS).doc(id)
    const docSnapshot = await docRef.get()
    if( docSnapshot.exists ) {
        return await docSnapshot.data()
    } else {
        return null
    }
}


//POST 

const addOne = async( body ) => {
	const docRef = await db.collection(TODOS).add(body)
	console.log(`Added todo named ${body.name} with id ${docRef.id}.`);
	const dateString = new Date()
    const idObject = {
        id: docRef.id,
		name: docRef.name,
		added: dateString,
    }
    return idObject;
}


//PUT

const updateOne = async(id, maybeTodo) => {
	const docRef = db.collection(TODOS).doc(id)
    console.log(`Updated todo named ${maybeTodo.name} with id ${docRef.id}.`);
    const settings = { merge: true }
	return docRef.set(maybeTodo, settings)
}


//DELETE

const deleteOne = async(id) => {
	const docRef = db.collection(TODOS).doc(id)
	const docSnapshot = await docRef.get()
    if( docSnapshot.exists ) {
        console.log(`Deleting todo with id ${id} ...`);
         await docRef.delete()
         return true
    } else {
        return false
    }
}



module.exports = router

