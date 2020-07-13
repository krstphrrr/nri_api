/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gintercept', {
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
		gapType: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'GAP_TYPE'
		},
		seqnum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SEQNUM'
		},
		startGap: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'START_GAP'
		},
		endGap: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'END_GAP'
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
		tableName: 'gintercept'
	});
};
