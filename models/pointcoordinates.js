/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pointcoordinates', {
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
		targetLatitude: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TARGET_LATITUDE'
		},
		targetLongitude: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TARGET_LONGITUDE'
		},
		fieldLatitude: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FIELD_LATITUDE'
		},
		fieldLongitude: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FIELD_LONGITUDE'
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
		dbKey: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'DBKey'
		}
	}, {
		tableName: 'pointcoordinates'
	});
};
