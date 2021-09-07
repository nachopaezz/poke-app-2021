const { Router } = require('express');
const {getTypeApi} = require("../controllersFunctions/getType")
const {Type} = require('../db')

const router = Router()

module.exports = router


router.get('/', async (req,res,next)=>{
    const result = await getTypeApi()
    res.json(result)
})