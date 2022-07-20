
const User = require('./models/User');

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getAllUsers: async () => {
            return await User.find()
        },
        async getUser(_, { _id }) {
            return await User.findById(_id);
        }
    },

    Mutation: {
        createUser: async (_, { userInput }) => {

            const user = new User(userInput);

            await user.save();
            return user;
        },
        async deleteUser(_, { _id }) {
            await User.findByIdAndDelete(_id);
            return 'User deleted';
        },
        async updateUser(_, { _id, userInput }) {
            return await User.findByIdAndUpdate(_id, userInput, { new: true });

        }
    }
}

module.exports = { resolvers };