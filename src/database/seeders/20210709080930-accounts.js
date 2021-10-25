const Sequelize = require("sequelize");
const date = new Date();

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "account",
      [
        {
          id: 1,
          is_admin: false,
          email: "test@test.com",
          password: "$2a$08$5pRc5ICKbOKZ0gQo64/.zOcdD8dFLNhF4W6Kjk6AUJuCTMqmAhVVO",
          last_login: date,
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 2,
          is_admin: false,
          email: "michael@scott.com",
          password: "$2a$08$5pRc5ICKbOKZ0gQo64/.zOcdD8dFLNhF4W6Kjk6AUJuCTMqmAhVVO",
          last_login: date,
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 3,
          is_admin: false,
          email: "frank@sinatra.com",
          password: "$2a$08$5pRc5ICKbOKZ0gQo64/.zOcdD8dFLNhF4W6Kjk6AUJuCTMqmAhVVO",
          last_login: date,
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
      ],
      {},
    );
  },

  down: async queryInterface => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete("account", { id: { [Op.in]: [1, 2, 3] } }, {});
  },
};
