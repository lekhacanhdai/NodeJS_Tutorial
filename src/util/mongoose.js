module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongose => mongose.toObject());
    },
    mongooesToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}