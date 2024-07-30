import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Define your user schema here
  name: {
    name: String,
    email: String,
    type: String,
    required: true,
  },
  // Add other fields as needed
}, { collection: 'users' });

export default mongoose.models.User || mongoose.model('User', UserSchema);
