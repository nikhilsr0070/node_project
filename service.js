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
/*
    putinfo: function (req, res) {
        let id = req.params.id;
        request.put(url.concat(id), (error, response, data) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: error.message
                });
            }

            let result = JSON.parse(data);
            if ('userId' && 'title' && 'completed' in req.body) {
                result.userId = req.body.userId;
                result.title = req.body.title;
                result.completed = req.body.completed;
            }
            else {
                return res.json({ "meta": { "code": 400, "error": 1, "message": "userId, title, completed are required fields." } })
            }
            console.log(result);
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },


    patchinfo: function (req, res) {
        let id = req.params.id;
        request.patch(url.concat(id), (error, response, data) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: error.message
                });
            }

            let result = JSON.parse(data);
            if ('userId' in req.body) {
                result.userId = req.body.userId;
            }
            else if ('title' in req.body) {
                result.title = req.body.title;
            }
            else if ('completed' in req.body) {
                result.completed = req.body.completed;
            }
            else{
                return res.json({ "meta": { "code": 400, "error": 1, "message": "Enter information to update." } })
            }

            console.log(result);
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },

    deleteinfo: function (req, res) {
        let id = req.params.id;
        request.delete(url.concat(id), (error, response, body) => {
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
