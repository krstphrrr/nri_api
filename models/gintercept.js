/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const gintercept = db.define('gintercept', {
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
		transect: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'TRANSECT'
		},
		gapType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GAP_TYPE'
		},
		seqnum: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SEQNUM'
		},
		startGap: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'START_GAP'
		},
		endGap: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'END_GAP'
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
		tableName: 'gintercept',
		createdAt: false,
		updatedAt:false,
	});

module.exports = gintercept
