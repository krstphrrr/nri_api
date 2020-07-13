/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")


const biomass = db.define('biomass', {
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
		plot: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PLOT'
		},
		herbGreenWeight: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'HERB_GREEN_WEIGHT'
		},
		herbSampleGreenWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'HERB_SAMPLE_GREEN_WEIGHT'
		},
		herbSampleDryWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'HERB_SAMPLE_DRY_WEIGHT'
		},
		herbDryWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'HERB_DRY_WEIGHT'
		},
		woodyGreenWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'WOODY_GREEN_WEIGHT'
		},
		woodySampleGreenWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'WOODY_SAMPLE_GREEN_WEIGHT'
		},
		woodySampleDryWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'WOODY_SAMPLE_DRY_WEIGHT'
		},
		woodyDryWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'WOODY_DRY_WEIGHT'
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
		tableName: 'biomass',
		createdAt: false,
		updatedAt:false,
	});

	module.exports = altwoody;