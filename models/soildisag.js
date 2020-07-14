/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const soildisag = db.define('soildisag', {
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
		veg1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG1'
		},
		veg2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG2'
		},
		veg3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG3'
		},
		veg4: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG4'
		},
		veg5: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG5'
		},
		veg6: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG6'
		},
		veg7: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG7'
		},
		veg8: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG8'
		},
		veg9: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG9'
		},
		veg10: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG10'
		},
		veg11: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG11'
		},
		veg12: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG12'
		},
		veg13: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG13'
		},
		veg14: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG14'
		},
		veg15: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG15'
		},
		veg16: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG16'
		},
		veg17: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG17'
		},
		veg18: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VEG18'
		},
		stability1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY1'
		},
		stability2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY2'
		},
		stability3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY3'
		},
		stability4: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY4'
		},
		stability5: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY5'
		},
		stability6: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY6'
		},
		stability7: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY7'
		},
		stability8: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY8'
		},
		stability9: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY9'
		},
		stability10: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY10'
		},
		stability11: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY11'
		},
		stability12: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY12'
		},
		stability13: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY13'
		},
		stability14: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY14'
		},
		stability15: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY15'
		},
		stability16: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY16'
		},
		stability17: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY17'
		},
		stability18: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'STABILITY18'
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
		tableName: 'soildisag',
		createdAt: false,
		updatedAt:false,
	});


module.exports = soildisag