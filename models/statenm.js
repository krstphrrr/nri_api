/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('statenm', {
		state: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'STATE'
		},
		stabbr: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'STABBR'
		},
		statenm: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'STATENM'
		},
		dbKey: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		pastureRegion: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PastureRegion'
		}
	}, {
		tableName: 'statenm'
	});
};
