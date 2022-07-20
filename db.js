const { connect } = require('mongoose');


const connectDB = async () => {
    try {
        await connect('mongodb+srv://<user>:<pass>@cluster0.8b5h3.mongodb.net/hospitaldb')
        console.log('MongoDB Connected');
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}
module.exports = { connectDB };