var request = require("request");
var url = ("https://jsonplaceholder.typicode.com/todos/");

module.exports = {
    getinfo: function (req, res) {
        let id = req.params.id;
        request.get(url.concat(id), (error, response, body) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: error.message
                });
            }
            let result = JSON.parse(body);
            console.log(result);
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    }
};
