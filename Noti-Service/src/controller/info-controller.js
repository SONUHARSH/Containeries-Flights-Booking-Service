const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'API is live',
        error: {},
        data: {},
    });
}

module.exports = {
    info
} 


/*const info = (req, res) => {
    return res.json({
        success: true,
        message: 'API is live',
        error: {},
        data: {},
    });
}

module.exports = {
    info
} */