const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        allusers: async () => {
            return User.find();
        },
        users: async (parent, { location }) => {
            return User.find({ location });
        },
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password, companyName, bio, photoType, location, link, reservationCost }) => {
            console.log("mutation here")
            const user = await User.create({ username, email, password, companyName, bio, photoType, location, link, reservationCost });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
    },
};


module.exports = resolvers;
