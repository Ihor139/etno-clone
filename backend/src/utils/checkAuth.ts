import {Request, Response} from "express";
import jwt from "jsonwebtoken";
/** 6.1 middleware, проверяем можно ли возвращать пользователю информацию о себе */
export default (req: Request, res: Response, next: () => void) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      /** расшифруем токен */
      const decoded = jwt.verify(token, "secret321");
      // @ts-ignore
      req.userId = decoded._id;

      /** next() запускает следующую функцию (res())*/
      next();
    } catch (error) {
      return res.status(403).json({
        message: "Нет доступа",
      });
    }
  } else {
    return res.status(403).json({
      message: "Нет доступа",
    });
  }
};
