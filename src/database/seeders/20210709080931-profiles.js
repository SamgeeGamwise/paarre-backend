const Sequelize = require("sequelize");
const date = new Date();

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "profile",
      [
        {
          id: 1,
          account_id: 1,
          details: "Lorem Ipsum",
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 2,
          account_id: 2,
          details: "Lorem Ipsum",
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 3,
          account_id: 3,
          details: "Lorem Ipsum",
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
    await queryInterface.bulkDelete("profile", { id: { [Op.in]: [1, 2, 3] } }, {});
  },
};
