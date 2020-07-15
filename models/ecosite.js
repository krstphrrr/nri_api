/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const ecosite = db.define('ecosite', {
		survey: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SURVEY'
		},
		state: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'STATE'
		},
		county: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'COUNTY'
		},
		psu: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PSU'
		},
		point: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'POINT'
		},
		seqnum: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SEQNUM'
		},
		coverage: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'COVERAGE'
		},
		startMark: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'START_MARK'
		},
		endMark: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'END_MARK'
		},
		ecoSiteState: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ECO_SITE_STATE'
		},
		ecoSiteMlra: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ECO_SITE_MLRA'
		},
		ecoSiteLru: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ECO_SITE_LRU'
		},
		ecoSiteName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ECO_SITE_NAME'
		},
		dbKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		primaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PrimaryKey',
			primaryKey:true
		},
		fipspsupnt: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FIPSPSUPNT'
		}
	}, {
		tableName: 'ecosite',
		createdAt: false,
		updatedAt:false,
	});

module.exports = ecosite;
