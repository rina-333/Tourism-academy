const router = require ( 'express' ).Router()
const axios = require ( 'axios' )

const userController = require ( '../controllers/userController' )
const authentication = require ( '../middlewares/authentication' )


// router.get ( '/register', userController.register )
router.post ( '/login', userController.login )
router.use ( authentication )
router.post ( '/news' )

module.exports = router