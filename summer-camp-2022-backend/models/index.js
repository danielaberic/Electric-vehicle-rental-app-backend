import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import process from 'process';
import { pathToFileURL } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const models = {};

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve(process.cwd(), 'models');

const sequelize = new Sequelize({
  database: process.env.DATABASE || 'summer_camp_2022',
  username: 'root',
  password: process.env.PASSWORD || 'Prof!c0123', // Enter password here
  dialect: 'mysql',
});

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach((file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    // @ts-ignore
    import(pathToFileURL(path.join(__dirname, file)).href).then(
      ({ default: model }) => {
        // eslint-disable-next-line no-underscore-dangle
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        const _model = model(sequelize, Sequelize.DataTypes);

        models[_model.name] = _model;

        Object.keys(models).forEach((modelName) => {
          if ('associate' in models[modelName]) {
            models[modelName].associate(models);
          }

          if ('loadScopes' in models[modelName]) {
            models[modelName].loadScopes(models);
          }

          if ('loadHooks' in models[modelName]) {
            models[modelName].loadHooks(models);
          }
        });
      }
    );
  });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
