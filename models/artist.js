module.exports = function(sequelize, DataTypes) {
	var Artist = sequelize.define("Artist", {
	    name: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      validate: {
	        len: [1]
	      }
	    },
	    email: {
	      type: DataTypes.STRING,
	      isEmail: true,
	      allowNull: false,
	      len: [1]
	    },
	    password: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      len: [6,12]
	    },
	    bio: {
	      type: DataTypes.TEXT,
	      allowNull: false,
	      validate: {
	        len: [1]
	      }
	    }, 
	    createdAt: {
	    	type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
	    }, 
	    updatedAt: {
	    	type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
	    }
    },{
    	timestamps:false
    });

    Artist.associate = function(models) {
    	// associates Artist with Artwork
    	Artist.hasMany(models.Artwork, {
    		onDelete: "cascade"
    	});
    };

    return Artist;
};