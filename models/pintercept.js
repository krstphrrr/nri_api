/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const pintercept = db.define('pintercept', {
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
		mark: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'MARK'
		},
		hit1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HIT1'
		},
		hit2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HIT2'
		},
		hit3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HIT3'
		},
		hit4: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HIT4'
		},
		hit5: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HIT5'
		},
		hit6: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HIT6'
		},
		basal: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BASAL'
		},
		nonsoil: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'NONSOIL'
		},
		dbKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		primaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PrimaryKey'
		},
		fipspsupnt: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FIPSPSUPNT'
		},
		sagebrushShape: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SAGEBRUSH_SHAPE'
		},
		sagebrushPlant: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SAGEBRUSH_PLANT'
		}
	}, {
		tableName: 'pintercept',
		createdAt: false,
		updatedAt:false,
	});

module.exports = pintercept
