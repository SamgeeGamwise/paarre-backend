const date = new Date();

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "interest_category",
      [
        {
          id: 1,
          name: "Sports",
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 2,
          name: "Arts",
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 3,
          name: "Hobbies",
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete("interest_category", { id: { [Op.in]: [1, 2, 3] } }, {});
  },
};
