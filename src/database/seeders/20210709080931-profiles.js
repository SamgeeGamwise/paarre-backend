const Sequelize = require('sequelize');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'Profiles',
      [
        {
          id: 1,
          accountId: 1,
          details: 'Lorem Ipsum',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 2,
          accountId: 2,
          details: 'Lorem Ipsum',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 3,
          accountId: 3,
          details: 'Lorem Ipsum',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Profiles', { id: { [Op.in]: [1, 2, 3] } }, {});
  },
};
