const Sequelize = require('sequelize');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          accountId: 1,
          firstName: 'test',
          lastName: 'test',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 2,
          accountId: 1,
          firstName: 'test',
          lastName: 'test',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 3,
          accountId: 2,
          firstName: 'Michael',
          lastName: 'Scott',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 4,
          accountId: 2,
          firstName: 'Second Michael',
          lastName: 'Scott',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 5,
          accountId: 3,
          firstName: 'Frank',
          lastName: 'Sinatra',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 6,
          accountId: 3,
          firstName: 'Second Frank',
          lastName: 'Sinatra',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', { id: { [Op.in]: [1, 2, 3, 4, 5, 6] } }, {});
  },
};
