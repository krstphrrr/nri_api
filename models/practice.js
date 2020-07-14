/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")

const practice = db.define('practice', {
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
		p314: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P314'
		},
		n314: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N314'
		},
		p338: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P338'
		},
		n338: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N338'
		},
		p378: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P378'
		},
		n378: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N378'
		},
		p380: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P380'
		},
		n380: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N380'
		},
		p382: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P382'
		},
		n382: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N382'
		},
		p516: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P516'
		},
		n516: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N516'
		},
		p548: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P548'
		},
		n548: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N548'
		},
		p550: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P550'
		},
		n550: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N550'
		},
		p574: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P574'
		},
		n574: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N574'
		},
		p575: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P575'
		},
		n575: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N575'
		},
		p614: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P614'
		},
		n614: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N614'
		},
		p642: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P642'
		},
		n642: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N642'
		},
		p648: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P648'
		},
		n648: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N648'
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
		},
		p381: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P381'
		},
		n381: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N381'
		},
		p390: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P390'
		},
		n390: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N390'
		},
		p393: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P393'
		},
		n393: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N393'
		},
		p449: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P449'
		},
		n449: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N449'
		},
		p512: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P512'
		},
		n512: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N512'
		},
		p528: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P528'
		},
		n528: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N528'
		},
		p590: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P590'
		},
		n590: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N590'
		},
		p595: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P595'
		},
		n595: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N595'
		},
		p666: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'P666'
		},
		n666: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'N666'
		}
	}, {
		tableName: 'practice',
		createdAt: false,
		updatedAt:false,
	});

module.exports = practice
