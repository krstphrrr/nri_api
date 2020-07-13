/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rangehealth', {
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
		rills: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'RILLS'
		},
		waterFlowPatterns: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'WATER_FLOW_PATTERNS'
		},
		pedestalsTerracettes: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PEDESTALS_TERRACETTES'
		},
		bareGround: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'BARE_GROUND'
		},
		gullies: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'GULLIES'
		},
		windScouredAreas: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'WIND_SCOURED_AREAS'
		},
		litterMovement: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'LITTER_MOVEMENT'
		},
		soilSurfResisErosion: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'SOIL_SURF_RESIS_EROSION'
		},
		soilSurfaceLossDeg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'SOIL_SURFACE_LOSS_DEG'
		},
		infiltrationRunoff: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'INFILTRATION_RUNOFF'
		},
		compactionLayer: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COMPACTION_LAYER'
		},
		funcStructGroups: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'FUNC_STRUCT_GROUPS'
		},
		plantMortalityDec: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PLANT_MORTALITY_DEC'
		},
		litterAmount: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'LITTER_AMOUNT'
		},
		annualProduction: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ANNUAL_PRODUCTION'
		},
		invasivePlants: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'INVASIVE_PLANTS'
		},
		reprodCapabilityPeren: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'REPROD_CAPABILITY_PEREN'
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
		},
		soilsiteStability: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'SOILSITE_STABILITY'
		},
		bioticIntegrity: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'BIOTIC_INTEGRITY'
		},
		hydrologicFunction: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HYDROLOGIC_FUNCTION'
		}
	}, {
		tableName: 'rangehealth'
	});
};
