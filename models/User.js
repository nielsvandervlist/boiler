import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Define your user schema here
  name: {
    type: String,
    required: true,
  },
  // Add other fields as needed
}, { collection: 'users' });

export default mongoose.models.User || mongoose.model('User', UserSchema);
