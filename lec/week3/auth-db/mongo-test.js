const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
mongoose.connect(process.env.URI);

// schema
const Users = mongoose.model('Users', { name: String, email : String, password: String });

// here we can save data to out db
const user1 = new Users({ name: 'Adii', email: "mishraaditya@live.com", password: 129433 });
const user2 = new Users({ name: 'Ammy', email: "mishraaditya@live.com" });
user1.save()
user2.save()

