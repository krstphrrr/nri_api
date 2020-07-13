/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pintercept', {
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
		transect: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'TRANSECT'
		},
		mark: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MARK'
		},
		hit1: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HIT1'
		},
		hit2: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HIT2'
		},
		hit3: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HIT3'
		},
		hit4: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HIT4'
		},
		hit5: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HIT5'
		},
		hit6: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HIT6'
		},
		basal: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'BASAL'
		},
		nonsoil: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'NONSOIL'
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
		sagebrushShape: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SAGEBRUSH_SHAPE'
		},
		sagebrushPlant: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'SAGEBRUSH_PLANT'
		}
	}, {
		tableName: 'pintercept'
	});
};
