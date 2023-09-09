const { Router } = require('express');
const usersRouter = require('./users');
const cardsRouter = require('./cards');

const router = Router();

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

router.use((req, res) => {
  res.status(404).send({ message: 'Ошибка 404. Страница не найдена' });
});

module.exports = router;
