/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const soilhorizon = db.define('soilhorizon', {
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
		seqnum: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SEQNUM'
		},
		depth: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'DEPTH'
		},
		depthUnit: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DEPTH_UNIT'
		},
		horizonTexture: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HORIZON_TEXTURE'
		},
		textureModifier: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'TEXTURE_MODIFIER'
		},
		effervescenceClass: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EFFERVESCENCE_CLASS'
		},
		unusualFeatures: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'UNUSUAL_FEATURES'
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
		tableName: 'soilhorizon',
		createdAt: false,
		updatedAt:false,
	});

module.exports = soilhorizon