/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const ptnote = db.define('ptnote', {
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
		ptsection: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PTSECTION'
		},
		ptnote: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PTNOTE'
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
		tableName: 'ptnote',
		createdAt: false,
		updatedAt:false,
	});

module.exports = ptnote
