/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const point = db.define('point', {
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
		mlra: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MLRA'
		},
		own: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'OWN'
		},
		landuse: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'LANDUSE'
		},
		verticalSlopeShape: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'VERTICAL_SLOPE_SHAPE'
		},
		horizontalSlopeShape: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HORIZONTAL_SLOPE_SHAPE'
		},
		slopePercent: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SLOPE_PERCENT'
		},
		ssaid: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SSAID'
		},
		musym: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MUSYM'
		},
		componentName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'COMPONENT_NAME'
		},
		componentId: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'COMPONENT_ID'
		},
		ecoSite1992: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ECO_SITE_1992'
		},
		fullEsdPlot: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FULL_ESD_PLOT'
		},
		esdFitsSoil: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_FITS_SOIL'
		},
		activeCutting: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ACTIVE_CUTTING'
		},
		apparentTrend: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'APPARENT_TREND'
		},
		basalGapsNesw: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BASAL_GAPS_NESW'
		},
		canopyGapsNesw: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CANOPY_GAPS_NESW'
		},
		basalGapsNwse: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BASAL_GAPS_NWSE'
		},
		canopyGapsNwse: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CANOPY_GAPS_NWSE'
		},
		plotSizeHerb: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PLOT_SIZE_HERB'
		},
		totAnnProd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'TOT_ANN_PROD'
		},
		similarityIndex: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SIMILARITY_INDEX'
		},
		ptstatus: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PTSTATUS'
		},
		soilConfidenceRating: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SOIL_CONFIDENCE_RATING'
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
		slopeLength: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SLOPE_LENGTH'
		},
		slopeAspect: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SLOPE_ASPECT'
		},
		biomassPlotSizeHerb: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BIOMASS_PLOT_SIZE_HERB'
		},
		biomassPlotMethod: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BIOMASS_PLOT_METHOD'
		},
		biomassWoodyMethod: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BIOMASS_WOODY_METHOD'
		},
		grazingUse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GRAZING_USE'
		},
		hayed: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HAYED'
		},
		optSsiPasture: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'OPT_SSI_PASTURE'
		},
		optDwrPasture: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'OPT_DWR_PASTURE'
		},
		optDwrRange: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'OPT_DWR_RANGE'
		},
		sageExists: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SAGE_EXISTS'
		},
		perennialCanopyGapsNesw: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PERENNIAL_CANOPY_GAPS_NESW'
		},
		perennialCanopyGapsNwse: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PERENNIAL_CANOPY_GAPS_NWSE'
		},
		componentHistorical: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'COMPONENT_HISTORICAL'
		},
		componentChosen: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'COMPONENT_CHOSEN'
		},
		componentPopulated: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'COMPONENT_POPULATED'
		},
		landuseSource: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LANDUSE_SOURCE'
		},
		gapsDifferentNesw: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GAPS_DIFFERENT_NESW'
		},
		gapsDifferentNwse: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GAPS_DIFFERENT_NWSE'
		}
	}, {
		tableName: 'point',
		createdAt: false,
		updatedAt:false,
	});

module.exports = point
