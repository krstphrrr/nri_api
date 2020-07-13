/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gps', {
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
		nogps: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'NOGPS'
		},
		capdate: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'CAPDATE'
		},
		elevation: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ELEVATION'
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
		},
		fieldVisit: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'FIELD_VISIT'
		}
	}, {
		tableName: 'gps'
	});
};
