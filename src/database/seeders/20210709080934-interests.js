const date = new Date();

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'interest',
      [
        {
          id: 1,
          category_id: 1,
          name: 'Outdoors',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 2,
          category_id: 1,
          name: 'Working Out',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 3,
          category_id: 1,
          name: 'Hiking',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 4,
          category_id: 1,
          name: 'Yoga',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 5,
          category_id: 1,
          name: 'Swimming',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 6,
          category_id: 1,
          name: 'Biking',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 7,
          category_id: 1,
          name: 'Walking',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 8,
          category_id: 1,
          name: 'Running',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 9,
          category_id: 2,
          name: 'Painting',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 10,
          category_id: 2,
          name: 'Sculpting',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 11,
          category_id: 3,
          name: 'Movies',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 12,
          category_id: 3,
          name: 'Volunteering',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 13,
          category_id: 3,
          name: 'Video Games',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 14,
          category_id: 3,
          name: 'Card Games',
          created_at: date,
          updated_at: date,
          deleted_at: null,
        },
        {
          id: 15,
          category_id: 3,
          name: 'Board Games',
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
    await queryInterface.bulkDelete(
      'interest',
      { id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] } },
      {}
    );
  },
};
