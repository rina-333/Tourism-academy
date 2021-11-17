const router = require ( 'express' ).Router()
const axios = require ( 'axios' )
const toImageKit = require ( '../middlewares/imageKit' )
const multer = require ( 'multer' )
const upload = multer()

const userController = require ( '../controllers/userController' )
const newsController = require ( '../controllers/newsController' )
const eventController = require ( '../controllers/eventController' )
const authentication = require ( '../middlewares/authentication' )


// router.get ( '/register', userController.register )
router.post ( '/login', userController.login )
router.get ( '/news', newsController.read )
router.get ( '/events', eventController.read )
router.get ( '/news/:id', newsController.findOne )
router.get ( '/events/:id', eventController.findOne )

router.use ( authentication )
router.post ( '/news', upload.single('galeri'), toImageKit, newsController.create )
router.post ( '/events', upload.single('galeri'), toImageKit, eventController.create )
router.put ( '/news/:id', upload.single('galeri'), toImageKit, newsController.update )
router.put ( '/events/:id', upload.single('galeri'), toImageKit, newsController.update )
router.delete ( '/news/:id', newsController.delete )
router.delete ( '/events/:id', eventController.delete )

module.exports = router