/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")


const altwoody = db.define('altwoody', {
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
		plot: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PLOT'
		},
		seqnum: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SEQNUM'
		},
		speciesGroup: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SPECIES_GROUP'
		},
		speciesDiameter: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SPECIES_DIAMETER'
		},
		speciesCount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SPECIES_COUNT'
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
			primaryKey: true
		},
		fipspsupnt: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FIPSPSUPNT'
		}
	}, {
		tableName: 'altwoody',
		createdAt: false,
		updatedAt:false,
	});

	module.exports = altwoody;
