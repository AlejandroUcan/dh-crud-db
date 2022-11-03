module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Cliente", {
    ClientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cellphone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Direction: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Division: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
  {
      tableName: "CLIENTS",
      timestamps: false,
  });
  
  return Client;
}
                  
