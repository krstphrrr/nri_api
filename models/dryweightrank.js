/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const dryweightrank = db.define('dryweightrank', {
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
		rplant: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RPLANT'
		},
		dwr0125Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0125NESW'
		},
		dwr0250Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0250NESW'
		},
		dwr0375Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0375NESW'
		},
		dwr0500Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0500NESW'
		},
		dwr0625Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0625NESW'
		},
		dwr0875Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0875NESW'
		},
		dwr1000Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR1000NESW'
		},
		dwr1125Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR1125NESW'
		},
		dwr1250Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR1250NESW'
		},
		dwr1375Nesw: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR1375NESW'
		},
		dwr0125Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0125NWSE'
		},
		dwr0250Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0250NWSE'
		},
		dwr0375Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0375NWSE'
		},
		dwr0500Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0500NWSE'
		},
		dwr0625Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0625NWSE'
		},
		dwr0875Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR0875NWSE'
		},
		dwr1000Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR1000NWSE'
		},
		dwr1125Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR1125NWSE'
		},
		dwr1250Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR1250NWSE'
		},
		dwr1375Nwse: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'DWR1375NWSE'
		},
		percentComposition: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PERCENT_COMPOSITION'
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
		tableName: 'dryweightrank',
		createdAt: false,
		updatedAt:false,
	});

module.exports = dryweightrank
