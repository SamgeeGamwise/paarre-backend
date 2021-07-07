const DataTypes = require('sequelize');

module.exports = {
  up: async queryInterface => {
    await queryInterface.createTable('Accounts', {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      IsAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastLogin: {
        type: DataTypes.DATE,
      },
      CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('Users', {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Accounts', key: 'Id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('Profiles', {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Accounts', key: 'Id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      Details: {
        type: DataTypes.STRING,
      },
      CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('Interests', {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ProfileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Profiles', key: 'Id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('Interests');
    await queryInterface.dropTable('Users');
    await queryInterface.dropTable('Profiles');
    await queryInterface.dropTable('Accounts');
  },
};
