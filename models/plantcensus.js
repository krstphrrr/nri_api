/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const plantcensus = db.define('plantcensus', {
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
		cplant: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CPLANT'
		},
		density: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DENSITY'
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
		tableName: 'plantcensus',
		createdAt: false,
		updatedAt:false,
	});

module.exports = plantcensus
