'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suggest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Suggest.init({
    name_suggest: DataTypes.STRING,
    desc_suggest: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Describe Suggest Require'
        }
      }
    },
    email_suggest: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email format'
        }
      }
    },
    date_suggest: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Suggest',
  });
  return Suggest;
};