/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")


const concern = db.define('concern', {
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
		erosionSheetAndRill: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EROSION_SHEET_AND_RILL'
		},
		erosionWind: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EROSION_WIND'
		},
		erosionClassicGully: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EROSION_CLASSIC_GULLY'
		},
		erosionStreambank: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EROSION_STREAMBANK'
		},
		erosionShoreline: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EROSION_SHORELINE'
		},
		erosionMassMovement: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EROSION_MASS_MOVEMENT'
		},
		organicMatterDepletion: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ORGANIC_MATTER_DEPLETION'
		},
		compaction: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'COMPACTION'
		},
		contaminantsSalts: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CONTAMINANTS_SALTS'
		},
		contaminantsWastesOrganics: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CONTAMINANTS_WASTES_ORGANICS'
		},
		damageFromSoilDeposition: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'DAMAGE_FROM_SOIL_DEPOSITION'
		},
		excessiveRunoffFloodingPond: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EXCESSIVE_RUNOFF_FLOODING_POND'
		},
		reducedStorageBySediment: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'REDUCED_STORAGE_BY_SEDIMENT'
		},
		insufficientFlows: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'INSUFFICIENT_FLOWS'
		},
		excessiveNutrientsOrganics: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EXCESSIVE_NUTRIENTS_ORGANICS'
		},
		excessiveSedimentTurbidity: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'EXCESSIVE_SEDIMENT_TURBIDITY'
		},
		plantNotAdaptedOrSuited: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'PLANT_NOT_ADAPTED_OR_SUITED'
		},
		productivityHealthAndVigor: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'PRODUCTIVITY_HEALTH_AND_VIGOR'
		},
		noxiousAndInvasivePlants: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'NOXIOUS_AND_INVASIVE_PLANTS'
		},
		forageQualityPalatability: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'FORAGE_QUALITY_PALATABILITY'
		},
		wildfireHazard: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'WILDFIRE_HAZARD'
		},
		inadequateStockWater: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'INADEQUATE_STOCK_WATER'
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
		tableName: 'concern',
		createdAt: false,
		updatedAt:false,
	});

module.exports = concern
