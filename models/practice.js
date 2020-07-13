/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('practice', {
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
		p314: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P314'
		},
		n314: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N314'
		},
		p338: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P338'
		},
		n338: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N338'
		},
		p378: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P378'
		},
		n378: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N378'
		},
		p380: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P380'
		},
		n380: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N380'
		},
		p382: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P382'
		},
		n382: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N382'
		},
		p516: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P516'
		},
		n516: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N516'
		},
		p548: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P548'
		},
		n548: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N548'
		},
		p550: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P550'
		},
		n550: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N550'
		},
		p574: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P574'
		},
		n574: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N574'
		},
		p575: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P575'
		},
		n575: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N575'
		},
		p614: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P614'
		},
		n614: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N614'
		},
		p642: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P642'
		},
		n642: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N642'
		},
		p648: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P648'
		},
		n648: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N648'
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
		p381: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P381'
		},
		n381: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N381'
		},
		p390: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P390'
		},
		n390: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N390'
		},
		p393: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P393'
		},
		n393: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N393'
		},
		p449: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P449'
		},
		n449: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N449'
		},
		p512: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P512'
		},
		n512: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N512'
		},
		p528: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P528'
		},
		n528: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N528'
		},
		p590: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P590'
		},
		n590: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N590'
		},
		p595: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P595'
		},
		n595: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N595'
		},
		p666: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P666'
		},
		n666: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'N666'
		}
	}, {
		tableName: 'practice'
	});
};
