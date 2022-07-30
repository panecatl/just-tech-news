const User = require('./User');
const Post = require('./Post');

// create associations of user having many post
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// post belongs to only one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };