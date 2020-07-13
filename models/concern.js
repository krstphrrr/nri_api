/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('concern', {
		survey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SURVEY'
		},
		state: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'STATE'
		},
		county: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COUNTY'
		},
		psu: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PSU'
		},
		point: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'POINT'
		},
		erosionSheetAndRill: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EROSION_SHEET_AND_RILL'
		},
		erosionWind: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EROSION_WIND'
		},
		erosionClassicGully: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EROSION_CLASSIC_GULLY'
		},
		erosionStreambank: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EROSION_STREAMBANK'
		},
		erosionShoreline: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EROSION_SHORELINE'
		},
		erosionMassMovement: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EROSION_MASS_MOVEMENT'
		},
		organicMatterDepletion: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORGANIC_MATTER_DEPLETION'
		},
		compaction: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'COMPACTION'
		},
		contaminantsSalts: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'CONTAMINANTS_SALTS'
		},
		contaminantsWastesOrganics: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'CONTAMINANTS_WASTES_ORGANICS'
		},
		damageFromSoilDeposition: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DAMAGE_FROM_SOIL_DEPOSITION'
		},
		excessiveRunoffFloodingPond: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EXCESSIVE_RUNOFF_FLOODING_POND'
		},
		reducedStorageBySediment: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REDUCED_STORAGE_BY_SEDIMENT'
		},
		insufficientFlows: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INSUFFICIENT_FLOWS'
		},
		excessiveNutrientsOrganics: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EXCESSIVE_NUTRIENTS_ORGANICS'
		},
		excessiveSedimentTurbidity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EXCESSIVE_SEDIMENT_TURBIDITY'
		},
		plantNotAdaptedOrSuited: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PLANT_NOT_ADAPTED_OR_SUITED'
		},
		productivityHealthAndVigor: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRODUCTIVITY_HEALTH_AND_VIGOR'
		},
		noxiousAndInvasivePlants: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NOXIOUS_AND_INVASIVE_PLANTS'
		},
		forageQualityPalatability: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FORAGE_QUALITY_PALATABILITY'
		},
		wildfireHazard: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WILDFIRE_HAZARD'
		},
		inadequateStockWater: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INADEQUATE_STOCK_WATER'
		},
		dbKey: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		primaryKey: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PrimaryKey'
		},
		fipspsupnt: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'FIPSPSUPNT'
		}
	}, {
		tableName: 'concern'
	});
};
