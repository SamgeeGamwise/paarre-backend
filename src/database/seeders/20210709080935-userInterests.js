const date = new Date();

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'user_interest',
      [
        {
          id: 1,
          profile_id: 1,
          interest_id: 1,
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 10,
          profile_id: 1,
          interest_id: 9,
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 11,
          profile_id: 1,
          interest_id: 11,
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('user_interest', { id: { [Op.in]: [1, 2, 3] } }, {});
  },
};
