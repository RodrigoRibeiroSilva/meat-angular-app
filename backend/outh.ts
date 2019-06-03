import { Request, Response } from 'express'

import {User , users} from './users'
import * as jwt from 'jsonwebtoken'
import { apiConfig } from './api-config';


export const handleAuthentication = (req: Request , res: Response) => {
    const user = req.body
    if(isValid(user)){
        const dbUser: User = users[user.email]
        const token = jwt.sign({sub: dbUser.email, iss: 'food-api'}, apiConfig.secret)
        res.send({name: dbUser.name, email: dbUser.email, accessToken: token})
    }else{
        res.status(403).send({message: 'Dados inválidos'})
    }
}

function isValid(user: User): boolean {
    if(!user){
        return false
    }else{
        const dbUser = users[user.email]
        return dbUser !== undefined && dbUser.matches(user)
    }
}