import bcrypt from 'bcrypt';
import UserServices from '../services/user.services.js';
import logger from '../utilities/logger.js';
import models from '../models/index.js';
import JwtServices from '../services/jwt.services.js';

class UserController {
  static async findUsers(req, res) {
    try {
      const users = await UserServices.getUsers();
      logger.info(users);
      return res.json(users);
    } catch (error) {
      logger.error(error);
      return console.log('Error occured while getting users');
    }
  }

  static async create(req, res) {
    const { firstName, lastName, email, password, isAdmin } = req.body;

    try {
      const user = await models.users.create({
        firstName,
        lastName,
        email,
        password,
        isAdmin,
      });
      logger.info(user);
    } catch (error) {
      logger.error(error);
      res.json('Error occured while creating user');
    }
    res.json('Ok');
  }

  static async login(req, res) {
    const { email, password } = req.body;
    const user = await UserServices.findUser(email);

    if (!user) {
      return res.status(401).json({
        error: 'User does not exist or password is not correct.',
      });
    }

    const isPasswordMatched = !!(await bcrypt.compare(password, user.password));

    if (!isPasswordMatched) {
      return res.status(401).json({
        error: 'User does not exist or password is not correct',
      });
    }

    const accessToken = await JwtServices.generateAccessToken(
      user.id,
      user.isAdmin
    );

    return res.status(200).send({
      accessToken,
    });
  }

  static async me(req, res) {
    const myself = await models.users.findByPk(req.user.id);
    const myselfSecure = {
      id: myself.id,
      firstName: myself.firstName,
      lastName: myself.lastName,
      email: myself.email,
      createdAt: myself.createdAt,
      updatedAt: myself.updatedAt,
    };
    return res.status(200).send(myselfSecure);
  }
}

export default UserController;
