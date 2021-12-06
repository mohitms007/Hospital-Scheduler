import {PrismaClient} from ".prisma/client"
import {Request, Response} from "express"

const prisma = new PrismaClient()

exports.createUser = async (req: Request, res: Response) => {

    const {email, name, picture, nickname, sub} = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })

        if (!user) {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    picture,
                    username: nickname,
                    token: sub
                }
            })
        }

        res.status(200).send('Was successfully logged in');
    } catch (e) {
        res.status(401).send('Some error happened while logging in.')
    }
}



