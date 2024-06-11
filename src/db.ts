import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:swnaz1107@cluster0.imtaoos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected...');
    } catch (err:any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;