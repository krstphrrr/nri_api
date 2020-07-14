/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const pastureheights = db.define('pastureheights', {
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
		distance: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'DISTANCE'
		},
		hplant: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HPLANT'
		},
		height: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'HEIGHT'
		},
		heightUnit: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HEIGHT_UNIT'
		},
		wplant: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'WPLANT'
		},
		wheight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'WHEIGHT'
		},
		wheightUnit: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'WHEIGHT_UNIT'
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
		},
		dbKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey'
		}
	}, {
		tableName: 'pastureheights',
		createdAt: false,
		updatedAt:false,
	});

module.exports = pastureheights
