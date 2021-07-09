const DataTypes = require('sequelize');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'Interests',
      [
        {
          id: 1,
          profileId: 1,
          name: 'Sports',
          category: 'Sports',
          type: 'category',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 2,
          profileId: 1,
          name: 'Outdoors',
          category: 'Sports',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 3,
          profileId: 1,
          name: 'Working Out',
          category: 'Sports',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 4,
          profileId: 1,
          name: 'Hiking',
          category: 'Sports',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 5,
          profileId: 1,
          name: 'Yoga',
          category: 'Sports',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 6,
          profileId: 1,
          name: 'Swimming',
          category: 'Sports',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 7,
          profileId: 1,
          name: 'Biking',
          category: 'Sports',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 8,
          profileId: 1,
          name: 'Walking',
          category: 'Sports',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 9,
          profileId: 1,
          name: 'Running',
          category: 'Sports',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 10,
          profileId: 1,
          name: 'Arts',
          category: 'Arts',
          type: 'category',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 11,
          profileId: 1,
          name: 'Painting',
          category: 'Arts',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 12,
          profileId: 1,
          name: 'Sculpting',
          category: 'Arts',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 13,
          profileId: 1,
          name: 'Hobbies',
          category: 'Hobbies',
          type: 'category',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 14,
          profileId: 1,
          name: 'Movies',
          category: 'Hobbies',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 15,
          profileId: 1,
          name: 'Volunteering',
          category: 'Hobbies',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 16,
          profileId: 1,
          name: 'Video Games',
          category: 'Hobbies',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 17,
          profileId: 1,
          name: 'Card Games',
          category: 'Hobbies',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
        {
          id: 18,
          profileId: 1,
          name: 'Board Games',
          category: 'Hobbies',
          type: 'value',
          createdAt: '2021-07-08 12:00:00',
          updatedAt: '2021-07-08 12:00:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'Interests',
      { id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] } },
      {}
    );
  },
};
