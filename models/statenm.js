/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const statenm = db.define('statenm', {
		state: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'STATE'
		},
		stabbr: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'STABBR'
		},
		statenm: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'STATENM'
		},
		dbKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey',
			primaryKey:true
		},
		pastureRegion: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PastureRegion'
		}
	}, {
		tableName: 'statenm',
		createdAt: false,
		updatedAt:false,
	});

module.exports = statenm
