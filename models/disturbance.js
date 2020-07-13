/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('disturbance', {
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
		pastpres: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PASTPRES'
		},
		wildfire: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WILDFIRE'
		},
		prescribedFire: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PRESCRIBED_FIRE'
		},
		fireFightingOperations: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FIRE_FIGHTING_OPERATIONS'
		},
		smallRodents: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SMALL_RODENTS'
		},
		largerMammals: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LARGER_MAMMALS'
		},
		water: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WATER'
		},
		wind: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WIND'
		},
		soilDepositionWater: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SOIL_DEPOSITION_WATER'
		},
		soilDepositionWind: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SOIL_DEPOSITION_WIND'
		},
		brushManagementChemical: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BRUSH_MANAGEMENT_CHEMICAL'
		},
		brushManagementMechanical: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BRUSH_MANAGEMENT_MECHANICAL'
		},
		undergroundUtilities: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UNDERGROUND_UTILITIES'
		},
		overheadTransmissionLines: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OVERHEAD_TRANSMISSION_LINES'
		},
		livestockTanksPipelines: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_TANKS_PIPELINES'
		},
		insects: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INSECTS'
		},
		livestockGrazing: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_GRAZING'
		},
		wildlifeGrazing: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WILDLIFE_GRAZING'
		},
		recreationVehiclesBikes: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RECREATION_VEHICLES_BIKES'
		},
		recreationFootTraffic: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RECREATION_FOOT_TRAFFIC'
		},
		machinery: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MACHINERY'
		},
		miningEquipmentOperations: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MINING_EQUIPMENT_OPERATIONS'
		},
		roadsDirt: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ROADS_DIRT'
		},
		roadsGravel: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ROADS_GRAVEL'
		},
		roadsPaved: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ROADS_PAVED'
		},
		fences: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FENCES'
		},
		oilFieldEquipment: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OIL_FIELD_EQUIPMENT'
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
		cultivation: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CULTIVATION'
		},
		mowing: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MOWING'
		},
		hayRemoval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HAY_REMOVAL'
		},
		heavyMachinery: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HEAVY_MACHINERY'
		},
		seedbedPreparation: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SEEDBED_PREPARATION'
		},
		livestockTanks: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_TANKS'
		},
		livestockHeavyUse: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_HEAVY_USE'
		},
		nonRodentAnimals: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NON_RODENT_ANIMALS'
		},
		livestockWalkways: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_WALKWAYS'
		},
		drainage: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DRAINAGE'
		},
		construction: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CONSTRUCTION'
		},
		waterPonding: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WATER_PONDING'
		},
		transportedFill: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TRANSPORTED_FILL'
		},
		brushManagementBiological: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BRUSH_MANAGEMENT_BIOLOGICAL'
		}
	}, {
		tableName: 'disturbance'
	});
};
