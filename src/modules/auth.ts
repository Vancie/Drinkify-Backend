import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'



//helper functions to hash passwords

export const comparePasswords = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

export const hashPassword = (password) => { 
    return bcrypt.hash(password, 5);
}



export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id, 
        username: user.username
    },
        process.env.JWT_SECRET
    );
    return token;
}

//auth middleware 
export const protect = (req, res, next) => {
    // generic  
    const bearer = req.headers.authorization;

    //not authorized
    if (!bearer) {
        res.status(401);
        res.json({message: 'Not authorized'});
        return;
    }
    //splits token and destructures into array
    const [, token] = bearer.split(' ');

    if (!token) {
        res.status(401);
        res.json({message: 'Invalid token'});
        return;
    }


    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch(e) {
        console.error(e);
        res.status(401);
        res.json({message: 'Invalid Token'});
    }
}



