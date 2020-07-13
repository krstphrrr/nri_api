/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('soilhorizon', {
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
		seqnum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SEQNUM'
		},
		depth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DEPTH'
		},
		depthUnit: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'DEPTH_UNIT'
		},
		horizonTexture: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HORIZON_TEXTURE'
		},
		textureModifier: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'TEXTURE_MODIFIER'
		},
		effervescenceClass: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'EFFERVESCENCE_CLASS'
		},
		unusualFeatures: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'UNUSUAL_FEATURES'
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
		tableName: 'soilhorizon'
	});
};
