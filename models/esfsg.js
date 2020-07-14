/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const esfsg = db.define('esfsg', {
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
		esfsgState: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESFSG_STATE'
		},
		esfsgMlra: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESFSG_MLRA'
		},
		esfsgSite: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESFSG_SITE'
		},
		esfsgName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESFSG_NAME'
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
		tableName: 'esfsg',
		createdAt: false,
		updatedAt:false,
	});

module.exports = esfsg
