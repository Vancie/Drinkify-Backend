
import prisma from '../db'
import { comparePasswords, createJWT, hashPassword } from '../modules/auth'

export const createNewUser = async (req, res, next) => { 
    try {
        const user = await prisma.user.create({
            data: {
                userName: req.body.username,
                password: await hashPassword(req.body.password),
                firstname: req.body.firstname,
                lastname: req.body.lastname
            }
        })
        const token = createJWT(user)
        res.json({ token: token })
    } catch (err) {
        err.type = "input"
        next(err)
    }
}

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            userName: req.body.username, 
        }
    })

    const isValid = await comparePasswords(req.body.password, user.password)

    if (!isValid) {
        res.status(401);
        res.json({ message: "Invalid password"});
        return;
    }

    const token = createJWT(user)
    res.json({ token: token })
}

