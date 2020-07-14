/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const pointcoordinates = db.define('pointcoordinates', {
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
		targetLatitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'TARGET_LATITUDE'
		},
		targetLongitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'TARGET_LONGITUDE'
		},
		fieldLatitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FIELD_LATITUDE'
		},
		fieldLongitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FIELD_LONGITUDE'
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
		tableName: 'pointcoordinates',
		createdAt: false,
		updatedAt:false,
	});


module.exports = pointcoordinates
