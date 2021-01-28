module.exports = function(sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
    return Budget;
  };