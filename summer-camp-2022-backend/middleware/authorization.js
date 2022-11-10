import JwtServices from '../services/jwt.services.js';
import models from '../models/index.js';
import logger from '../utilities/logger.js';

class Authorization {
  static async auth(req, res, next) {
    try {
      if (!req.headers.authorization){
          return res.status(401).json({
            error: 'You are not logged in.',
        });
      }

      const { authorization } = req.headers;

      const token = authorization.replace('Bearer ', '').trim();

      const decoded = JwtServices.verifyAccessToken(token);

      if (!decoded.id) {
        return res.status(401).json({
          error: 'Bad token. Please login again',
        });
      }

      const user = await models.users.findOne({ where: { id: decoded.id } });
      if (user === null) {
        return res.status(401).json({
          error: 'User does not exist.',
        });
      }
      req.user = user;
      return next();
        
      } catch (error) {
        logger.error(error);
        return res.status(400).json({
          error: 'Bad token. Please login again',
        });
    }
  }
}

export default Authorization;
