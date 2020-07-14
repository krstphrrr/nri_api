/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const gps = db.define('gps', {
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
		nogps: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'NOGPS'
		},
		capdate: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CAPDATE'
		},
		elevation: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ELEVATION'
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
		},
		fieldVisit: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FIELD_VISIT'
		}
	}, {
		tableName: 'gps',
		createdAt: false,
		updatedAt:false,
	});

module.exports = gps
