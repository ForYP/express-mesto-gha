const usersRouter = require('express').Router();
const {
  getUsers,
  createUser,
  getUserById,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

usersRouter.get('/', getUsers); // возвращает всех пользователей
usersRouter.get('/:userId', getUserById); // возвращает пользователя по _id
usersRouter.post('/', createUser); // создаёт пользователя
usersRouter.patch('/me', updateProfile); // обновляет профиль
usersRouter.patch('/me/avatar', updateAvatar); // обновляет аватар

module.exports = usersRouter;
