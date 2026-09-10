import {User} from '../models/users.models.js'
import bcrypt from 'bcryptjs'
const signup = async (req, res) => {
    const {username, password, firstName, lastName} = req.body;

    const existingUser = await User.findOne({username})
    if(existingUser){
        return res.status(429).json({
            msg: "User already exist"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        password: hashedPassword, 
        firstName,
        lastName
    })

    // create jwt
    const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRY}
    )

    return res.status(201).json({
        msg: `User created successfully`
    })

}

export {signup}