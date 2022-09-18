import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';
import config from '../config/config';
import logging from '../config/logging';

const NAMESPACE = 'Auth';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
    var timeSinceEpoch = new Date().getTime();
    var expirationTime = timeSinceEpoch + Number(config.server.token.expireTime) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    logging.info(NAMESPACE, `Attempting to sign token for ${user._id}`);

    try {
        jwt.sign(
            {
                username: user.username
            },
            config.server.token.secret,
            {
                issuer: config.server.token.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error) {
        logging.error(NAMESPACE, (error as Error).message, error);
        callback(error as Error, null);
    }
};

export default signJWT;
