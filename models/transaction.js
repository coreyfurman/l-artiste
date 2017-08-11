module.exports = function(sequelize, DataTypes) {
	var Transactions = sequelize.define("Transactions", {
		item: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		price: {
			type: DataTypes.DECIMAL(10,2),
			allowNull: false,
			isNumeric: true
		},
		buyer: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		seller: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	});

	Transactions.associate = function(models) {
		//associates Transaction with Artist
		Transactions.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Transactions;
};