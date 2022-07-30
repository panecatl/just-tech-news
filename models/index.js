const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations of user having many post
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// post belongs to only one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// all vote logic
// belongs to many allows user and post to queary each other in cotext of votes
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };