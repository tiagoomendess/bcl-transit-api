import { type } from "os";
import AppConfig from "../../config/appConfig";
import * as jwt from "jsonwebtoken";

class JWT {
  signToken(userId: number, expires = "1d"): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
          id: userId,
          iat: Date.now(),
        },
        AppConfig.app.secret,
        {
          expiresIn: expires,
        },
        (err, token) => {
          if (err) {
            reject(err);
          }
          resolve(token);
        }
      );
    });
  }

  verifyToken(token: string): Promise<jwt.JwtPayload | undefined> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, AppConfig.app.secret, (err, decoded) => {
        if (err) {
          reject(err);
        }

        // Don't really like this but had to do a quick fix
        // because I broke this when I updated all the packages
        if (typeof decoded === "string") {
          resolve(undefined);
        } else {
          resolve(decoded);
        }
      });
    });
  }
}

export default new JWT();
