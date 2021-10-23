

const express = require('express')
const router = express.Router()
const { connect } = require('../database.js') 
const db = connect()

const TOMATOES = 'tomatoes'

//ENDPOINTS:

//GET /tomatoes -> array med alla tomatoobject
router.get('/', async(req, res) => { 
    let array = await getAll()
    if (array) {
        res.status(200).send(array)
    } else {
        res.sendStatus(404)
    }
})


//GET /tomato/:id -> tomato med ett specifikt id. 404 om inget objekt med detta id finns.
router.get('/:id', async(req, res) => { 
    let maybeTomato = await getOne(req.params.id)
    if (maybeTomato) {
        res.status(200).send(maybeTomato) 
    } else {
        res.sendStatus(404)
    }
})

//POST /tomato -> req.body: tomato-objekt utan id. respons: objekt med id som skapas i db 
router.post('/', async(req, res) => {
    let body = await req.body
    
    if (!isTomatoObject(body, 'every')) {
        res.sendStatus(400)
    } else {
    let newTomato = await addOne( body )
    
    res.status(200).send(newTomato)
    }
    
})

//PUT tomato/:id -> req.body: obj med ändringar. respons: statuskod
router.put('/:id', async(req, res) => {
    let isTomato = await getOne(req.params.id)
    let maybeTomato = req.body
    try {
        //kontrollera att tomato med angivet id finns
        if (!isTomato) {
            res.sendStatus(404)
        //kontrollera att body är okej valideringsfunktion
        }else if (!isTomatoObject(maybeTomato, 'some')) {
            res.sendStatus(400)
        } else {
        await updateOne(req.params.id, maybeTomato)
        res.sendStatus(200)
        }
    } catch (error) {
        console.log('error: ', error);
    }
    
})

//DELETE tomato/:id -> respons: status
router.delete('/:id', async(req, res) => {
    let array = await deleteOne(req.params.id)
    if (array) {
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
})



//FUNCTIONS

//validering, kontrollerar att det är ett korrekt tomatoobjekt
const isTomatoObject = (body, option) => {
    //BODY IS OBJECT ?
    if ( (typeof body) !== 'object' ) {
        return false 
    }

    let possibleKeys = ['name', 'time']
	let numberKeys = ['time']
	let stringKeys = ['name']

    let values = Object.values(body)
    let keys = Object.keys(body) 
    //kontrollera att keys är korrekta, post= alla keys, put= minst en key
    let allKeysExist = possibleKeys.every( key => keys.includes(key) )
    let someKeysExist = possibleKeys.some( key => keys.includes(key) )
    //ny array med siffror, ny med strängar
    if ( !allKeysExist && someKeysExist ) {
        numberKeys = keys.filter(key => numberKeys.includes(key))
        stringKeys = keys.filter(key => stringKeys.includes(key))
    }
    
    //kontrollerar types
    let numberType = numberKeys.every(key=> {
        return typeof body[key] === 'number' && body[key] >= 0
    })

    let stringType = stringKeys.every(key=> {   
        return typeof body[key] === 'string'
    })

    //kontrollerar att inga values är tomma
    let noEmptyValues = values.every( x => x.toString().length > 0 )

    //POST
    if ( option === 'every' ) {
        return numberType && stringType && noEmptyValues && allKeysExist
    //PUT
    } else if ( option === 'some' ) {
        return numberType && stringType && noEmptyValues && someKeysExist
    }
}



//GET
const getAll = async() => {
	const tomatoesRef = db.collection(TOMATOES)
	const tomatoeSnapshot = await tomatoesRef.get()
	if( tomatoeSnapshot.empty ) {
		return []
	}
	const array = []
	await tomatoeSnapshot.forEach(async docRef => {
		const data = await docRef.data()
		data.id = docRef.id
		array.push(data)
	})
    return array
}


const getOne = async(id) => {
    const docRef = db.collection(TOMATOES).doc(id)
    const docSnapshot = await docRef.get()
    if( docSnapshot.exists ) {
        return await docSnapshot.data()
    } else {
        return null
    }
}


//POST 

const addOne = async( body ) => {
	const docRef = await db.collection(TOMATOES).add(body)
	console.log(`Added tomato named ${body.name} with id ${docRef.id}.`);
    const idObject = {
        id: docRef.id
    }
    return idObject;
}


//PUT

const updateOne = async(id, maybeTomato) => {
	const docRef = db.collection(TOMATOES).doc(id)
    console.log(`Updated tomato named ${maybeTomato.name} with id ${docRef.id}.`);
    const settings = { merge: true }
	return docRef.set(maybeTomato, settings)
}


//DELETE

const deleteOne = async(id) => {
	const docRef = db.collection(TOMATOES).doc(id)
	const docSnapshot = await docRef.get()
    if( docSnapshot.exists ) {
        console.log(`Deleting tomato with id ${id} ...`);
         await docRef.delete()
         return true
    } else {
        return false
    }
}



module.exports = router

