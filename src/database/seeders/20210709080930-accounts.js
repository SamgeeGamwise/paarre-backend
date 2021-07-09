const Sequelize = require('sequelize');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'Accounts',
      [
        {
          id: 1,
          isAdmin: false,
          email: 'test@test.com',
          password: '$2a$08$5pRc5ICKbOKZ0gQo64/.zOcdD8dFLNhF4W6Kjk6AUJuCTMqmAhVVO',
          lastLogin: '2021-07-08 12:00:00',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 2,
          isAdmin: false,
          email: 'michael@scott.com',
          password: '$2a$08$5pRc5ICKbOKZ0gQo64/.zOcdD8dFLNhF4W6Kjk6AUJuCTMqmAhVVO',
          lastLogin: '2021-07-08 12:00:00',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 3,
          isAdmin: false,
          email: 'frank@sinatra.com',
          password: '$2a$08$5pRc5ICKbOKZ0gQo64/.zOcdD8dFLNhF4W6Kjk6AUJuCTMqmAhVVO',
          lastLogin: '2021-07-08 12:00:00',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Accounts', { id: { [Op.in]: [1, 2, 3] } }, {});
  },
};
