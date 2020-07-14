/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const rangehealth = db.define('rangehealth', {
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
		rills: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RILLS'
		},
		waterFlowPatterns: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'WATER_FLOW_PATTERNS'
		},
		pedestalsTerracettes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PEDESTALS_TERRACETTES'
		},
		bareGround: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BARE_GROUND'
		},
		gullies: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GULLIES'
		},
		windScouredAreas: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'WIND_SCOURED_AREAS'
		},
		litterMovement: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LITTER_MOVEMENT'
		},
		soilSurfResisErosion: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SOIL_SURF_RESIS_EROSION'
		},
		soilSurfaceLossDeg: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SOIL_SURFACE_LOSS_DEG'
		},
		infiltrationRunoff: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'INFILTRATION_RUNOFF'
		},
		compactionLayer: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'COMPACTION_LAYER'
		},
		funcStructGroups: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FUNC_STRUCT_GROUPS'
		},
		plantMortalityDec: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PLANT_MORTALITY_DEC'
		},
		litterAmount: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LITTER_AMOUNT'
		},
		annualProduction: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ANNUAL_PRODUCTION'
		},
		invasivePlants: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'INVASIVE_PLANTS'
		},
		reprodCapabilityPeren: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'REPROD_CAPABILITY_PEREN'
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
		soilsiteStability: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SOILSITE_STABILITY'
		},
		bioticIntegrity: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BIOTIC_INTEGRITY'
		},
		hydrologicFunction: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HYDROLOGIC_FUNCTION'
		}
	}, {
		tableName: 'rangehealth',
		createdAt: false,
		updatedAt:false,
	});

module.exports = rangehealth
