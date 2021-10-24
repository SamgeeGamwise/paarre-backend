const Sequelize = require('sequelize');
const date = new Date();

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 1,
          account_id: 1,
          first_name: 'test',
          last_name: 'test',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 2,
          account_id: 1,
          first_name: 'test',
          last_name: 'test',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 3,
          account_id: 2,
          first_name: 'Michael',
          last_name: 'Scott',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 4,
          account_id: 2,
          first_name: 'Second Michael',
          last_name: 'Scott',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 5,
          account_id: 3,
          first_name: 'Frank',
          last_name: 'Sinatra',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 6,
          account_id: 3,
          first_name: 'Second Frank',
          last_name: 'Sinatra',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('user', { id: { [Op.in]: [1, 2, 3, 4, 5, 6] } }, {});
  },
};
