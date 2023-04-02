const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBooks');
    },
    me: async (parent, args, context) => {
      console.log("############### me server ", context)
      if (context.user) {
        console.log("############### me server ", context.user.username)

        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      console.log("server adduser ", user);
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

    saveBook: async (parent, { bookId, authors, description, image, link, title}, context) => {
      if (context.user) {


       const user =  await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: {bookId, authors, description, image, link, title} } },
          { new: true, runValidators: true }
        );

        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: {bookId: bookId } }},
          { new: true }
        );

        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
