/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('esfsg', {
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
		coverage: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COVERAGE'
		},
		startMark: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'START_MARK'
		},
		endMark: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'END_MARK'
		},
		esfsgState: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ESFSG_STATE'
		},
		esfsgMlra: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ESFSG_MLRA'
		},
		esfsgSite: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ESFSG_SITE'
		},
		esfsgName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ESFSG_NAME'
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
		tableName: 'esfsg'
	});
};
