/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pastureheights', {
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
		transect: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'TRANSECT'
		},
		distance: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DISTANCE'
		},
		hplant: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HPLANT'
		},
		height: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'HEIGHT'
		},
		heightUnit: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HEIGHT_UNIT'
		},
		wplant: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'WPLANT'
		},
		wheight: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WHEIGHT'
		},
		wheightUnit: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'WHEIGHT_UNIT'
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
		},
		dbKey: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'DBKey'
		}
	}, {
		tableName: 'pastureheights'
	});
};
