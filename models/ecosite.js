/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ecosite', {
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
		ecoSiteState: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ECO_SITE_STATE'
		},
		ecoSiteMlra: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ECO_SITE_MLRA'
		},
		ecoSiteLru: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ECO_SITE_LRU'
		},
		ecoSiteName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ECO_SITE_NAME'
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
		tableName: 'ecosite'
	});
};
