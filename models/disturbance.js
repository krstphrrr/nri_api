/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const disturbance = db.define('disturbance', {
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
		pastpres: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PASTPRES'
		},
		wildfire: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'WILDFIRE'
		},
		prescribedFire: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'PRESCRIBED_FIRE'
		},
		fireFightingOperations: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'FIRE_FIGHTING_OPERATIONS'
		},
		smallRodents: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SMALL_RODENTS'
		},
		largerMammals: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'LARGER_MAMMALS'
		},
		water: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'WATER'
		},
		wind: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'WIND'
		},
		soilDepositionWater: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SOIL_DEPOSITION_WATER'
		},
		soilDepositionWind: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SOIL_DEPOSITION_WIND'
		},
		brushManagementChemical: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'BRUSH_MANAGEMENT_CHEMICAL'
		},
		brushManagementMechanical: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'BRUSH_MANAGEMENT_MECHANICAL'
		},
		undergroundUtilities: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'UNDERGROUND_UTILITIES'
		},
		overheadTransmissionLines: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'OVERHEAD_TRANSMISSION_LINES'
		},
		livestockTanksPipelines: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_TANKS_PIPELINES'
		},
		insects: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'INSECTS'
		},
		livestockGrazing: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_GRAZING'
		},
		wildlifeGrazing: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'WILDLIFE_GRAZING'
		},
		recreationVehiclesBikes: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'RECREATION_VEHICLES_BIKES'
		},
		recreationFootTraffic: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'RECREATION_FOOT_TRAFFIC'
		},
		machinery: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'MACHINERY'
		},
		miningEquipmentOperations: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'MINING_EQUIPMENT_OPERATIONS'
		},
		roadsDirt: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ROADS_DIRT'
		},
		roadsGravel: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ROADS_GRAVEL'
		},
		roadsPaved: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ROADS_PAVED'
		},
		fences: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'FENCES'
		},
		oilFieldEquipment: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'OIL_FIELD_EQUIPMENT'
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
		cultivation: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'CULTIVATION'
		},
		mowing: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'MOWING'
		},
		hayRemoval: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'HAY_REMOVAL'
		},
		heavyMachinery: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'HEAVY_MACHINERY'
		},
		seedbedPreparation: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SEEDBED_PREPARATION'
		},
		livestockTanks: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_TANKS'
		},
		livestockHeavyUse: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_HEAVY_USE'
		},
		nonRodentAnimals: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'NON_RODENT_ANIMALS'
		},
		livestockWalkways: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'LIVESTOCK_WALKWAYS'
		},
		drainage: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'DRAINAGE'
		},
		construction: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'CONSTRUCTION'
		},
		waterPonding: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'WATER_PONDING'
		},
		transportedFill: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'TRANSPORTED_FILL'
		},
		brushManagementBiological: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'BRUSH_MANAGEMENT_BIOLOGICAL'
		}
	}, {
		tableName: 'disturbance',
		createdAt: false,
		updatedAt:false,
	});

module.exports = disturbance;
