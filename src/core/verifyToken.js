import jwt from 'jsonwebtoken';

export const TokenValidation = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}
		const payload = jwt.verify(token, process.env.TOKEN_SECRET || '');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
        next();
    } catch (e) {
        res.status(400).send('Invalid Token');
    }
}
