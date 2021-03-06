module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('LandingPages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    hash: {
      type: Sequelize.UUID,
      allowNull: true,
      defaultValue: Sequelize.UUIDV1,
      unique: true,
    },
    slug: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    createdAt: {
      allowNull: true,
      default: Sequelize.literal('NOW()'),
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: true,
      default: Sequelize.literal('NOW()'),
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('LandingPages'),
};
