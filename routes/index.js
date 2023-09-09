const { Router } = require('express');
const usersRouter = require('./users');
const cardsRouter = require('./cards');

const router = Router();

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

module.exports = router;
