/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('plantcensus', {
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
		seqnum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SEQNUM'
		},
		cplant: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'CPLANT'
		},
		density: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DENSITY'
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
		tableName: 'plantcensus'
	});
};
