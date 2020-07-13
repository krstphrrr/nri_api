/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dryweightrank', {
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
		rplant: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'RPLANT'
		},
		dwr0125Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0125NESW'
		},
		dwr0250Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0250NESW'
		},
		dwr0375Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0375NESW'
		},
		dwr0500Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0500NESW'
		},
		dwr0625Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0625NESW'
		},
		dwr0875Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0875NESW'
		},
		dwr1000Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR1000NESW'
		},
		dwr1125Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR1125NESW'
		},
		dwr1250Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR1250NESW'
		},
		dwr1375Nesw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR1375NESW'
		},
		dwr0125Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0125NWSE'
		},
		dwr0250Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0250NWSE'
		},
		dwr0375Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0375NWSE'
		},
		dwr0500Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0500NWSE'
		},
		dwr0625Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0625NWSE'
		},
		dwr0875Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR0875NWSE'
		},
		dwr1000Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR1000NWSE'
		},
		dwr1125Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR1125NWSE'
		},
		dwr1250Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR1250NWSE'
		},
		dwr1375Nwse: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DWR1375NWSE'
		},
		percentComposition: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'PERCENT_COMPOSITION'
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
		tableName: 'dryweightrank'
	});
};
