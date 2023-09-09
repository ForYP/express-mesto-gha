const cardsRouter = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

cardsRouter.get('/', getCards); // возвращает все карточки
cardsRouter.post('/', createCard); // создаёт карточку
cardsRouter.delete('/:cardId', deleteCard); // удаляет карточку по идентификатору
cardsRouter.put('/:cardId/likes', likeCard); // поставить лайк карточке
cardsRouter.delete('/:cardId/likes', dislikeCard); // убрать лайк с карточки

module.exports = cardsRouter;
