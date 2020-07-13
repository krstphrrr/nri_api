/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('point', {
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
		mlra: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'MLRA'
		},
		own: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'OWN'
		},
		landuse: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LANDUSE'
		},
		verticalSlopeShape: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'VERTICAL_SLOPE_SHAPE'
		},
		horizontalSlopeShape: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HORIZONTAL_SLOPE_SHAPE'
		},
		slopePercent: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SLOPE_PERCENT'
		},
		ssaid: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'SSAID'
		},
		musym: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'MUSYM'
		},
		componentName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COMPONENT_NAME'
		},
		componentId: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COMPONENT_ID'
		},
		ecoSite1992: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ECO_SITE_1992'
		},
		fullEsdPlot: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'FULL_ESD_PLOT'
		},
		esdFitsSoil: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ESD_FITS_SOIL'
		},
		activeCutting: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ACTIVE_CUTTING'
		},
		apparentTrend: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'APPARENT_TREND'
		},
		basalGapsNesw: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'BASAL_GAPS_NESW'
		},
		canopyGapsNesw: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'CANOPY_GAPS_NESW'
		},
		basalGapsNwse: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'BASAL_GAPS_NWSE'
		},
		canopyGapsNwse: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'CANOPY_GAPS_NWSE'
		},
		plotSizeHerb: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PLOT_SIZE_HERB'
		},
		totAnnProd: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TOT_ANN_PROD'
		},
		similarityIndex: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SIMILARITY_INDEX'
		},
		ptstatus: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PTSTATUS'
		},
		soilConfidenceRating: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SOIL_CONFIDENCE_RATING'
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
		slopeLength: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SLOPE_LENGTH'
		},
		slopeAspect: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'SLOPE_ASPECT'
		},
		biomassPlotSizeHerb: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'BIOMASS_PLOT_SIZE_HERB'
		},
		biomassPlotMethod: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'BIOMASS_PLOT_METHOD'
		},
		biomassWoodyMethod: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'BIOMASS_WOODY_METHOD'
		},
		grazingUse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'GRAZING_USE'
		},
		hayed: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HAYED'
		},
		optSsiPasture: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'OPT_SSI_PASTURE'
		},
		optDwrPasture: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'OPT_DWR_PASTURE'
		},
		optDwrRange: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'OPT_DWR_RANGE'
		},
		sageExists: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'SAGE_EXISTS'
		},
		perennialCanopyGapsNesw: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PERENNIAL_CANOPY_GAPS_NESW'
		},
		perennialCanopyGapsNwse: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PERENNIAL_CANOPY_GAPS_NWSE'
		},
		componentHistorical: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COMPONENT_HISTORICAL'
		},
		componentChosen: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COMPONENT_CHOSEN'
		},
		componentPopulated: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'COMPONENT_POPULATED'
		},
		landuseSource: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'LANDUSE_SOURCE'
		},
		gapsDifferentNesw: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'GAPS_DIFFERENT_NESW'
		},
		gapsDifferentNwse: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'GAPS_DIFFERENT_NWSE'
		}
	}, {
		tableName: 'point'
	});
};
