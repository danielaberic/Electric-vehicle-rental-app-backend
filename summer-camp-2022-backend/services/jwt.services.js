import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class JwtServices {
  static async generateAccessToken(id, isAdmin) {
    return jwt.sign({ id, isAdmin }, process.env.TOKEN || 'summer-camp', {
      algorithm: 'HS256',
      expiresIn: '365d',
    });
  }

  static verifyAccessToken(token) {
    return jwt.verify(token, process.env.TOKEN || 'summer-camp', {
      algorithm: 'HS256',
    });
  }
}

export default JwtServices;
