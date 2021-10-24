'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Session', {
      sid: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      expires: Sequelize.DATE,
      data: Sequelize.TEXT,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable(
      'account',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        is_admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_login: {
          type: Sequelize.DATE,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        tableName: 'account',
        freezeTableName: true,
        underscored: true,
        paranoid: true,
        initialAutoIncrement: 1000,
      }
    );

    await queryInterface.createTable(
      'user',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        account_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'account', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        tableName: 'user',
        freezeTableName: true,
        underscored: true,
        paranoid: true,
        initialAutoIncrement: 1000,
      }
    );

    await queryInterface.createTable(
      'profile',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        account_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'account', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        details: {
          type: Sequelize.TEXT,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        tableName: 'profile',
        freezeTableName: true,
        underscored: true,
        paranoid: true,
        initialAutoIncrement: 1000,
      }
    );

    await queryInterface.createTable(
      'interest_category',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        tableName: 'interest_category',
        freezeTableName: true,
        underscored: true,
        paranoid: true,
        initialAutoIncrement: 1000,
      }
    );

    await queryInterface.createTable(
      'interest',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'interest_category', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        tableName: 'interest',
        freezeTableName: true,
        underscored: true,
        paranoid: true,
        initialAutoIncrement: 1000,
      }
    );

    await queryInterface.createTable(
      'user_interest',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        profile_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'profile', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        interest_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'interest', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        tableName: 'user_interest',
        freezeTableName: true,
        underscored: true,
        paranoid: true,
        initialAutoIncrement: 1000,
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('user_interest');
    await queryInterface.dropTable('interest');
    await queryInterface.dropTable('interest_category');
    await queryInterface.dropTable('user');
    await queryInterface.dropTable('profile');
    await queryInterface.dropTable('account');
    await queryInterface.dropTable('Session');
  },
};
