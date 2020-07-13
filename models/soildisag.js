/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('soildisag', {
		survey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SURVEY'
		},
		state: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'STATE'
		},
		county: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COUNTY'
		},
		psu: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PSU'
		},
		point: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'POINT'
		},
		veg1: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG1'
		},
		veg2: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG2'
		},
		veg3: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG3'
		},
		veg4: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG4'
		},
		veg5: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG5'
		},
		veg6: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG6'
		},
		veg7: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG7'
		},
		veg8: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG8'
		},
		veg9: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG9'
		},
		veg10: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG10'
		},
		veg11: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG11'
		},
		veg12: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG12'
		},
		veg13: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG13'
		},
		veg14: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG14'
		},
		veg15: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG15'
		},
		veg16: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG16'
		},
		veg17: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG17'
		},
		veg18: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VEG18'
		},
		stability1: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY1'
		},
		stability2: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY2'
		},
		stability3: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY3'
		},
		stability4: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY4'
		},
		stability5: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY5'
		},
		stability6: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY6'
		},
		stability7: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY7'
		},
		stability8: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY8'
		},
		stability9: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY9'
		},
		stability10: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY10'
		},
		stability11: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY11'
		},
		stability12: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY12'
		},
		stability13: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY13'
		},
		stability14: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY14'
		},
		stability15: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY15'
		},
		stability16: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY16'
		},
		stability17: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY17'
		},
		stability18: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'STABILITY18'
		},
		dbKey: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		primaryKey: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PrimaryKey'
		},
		fipspsupnt: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'FIPSPSUPNT'
		}
	}, {
		tableName: 'soildisag'
	});
};
