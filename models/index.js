const User = require("./User");
const Entry = require("./entry");


Entry.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Entry, {
    foreignKey: "user_id"
});



module.exports = { User, Entry }