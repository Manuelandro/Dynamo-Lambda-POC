const AWS = require('aws-sdk')
const addItem = require("./src/add_item")
const loadItem = require("./src/load_item")
const loadAllItems = require("./src/load_all_items")

AWS.config.update({
    region: 'us-east-1'
});

module.exports = async (event) => {
    let response;

    switch (true) {
        case event.routeKey === "GET /games":
            const games = await loadAllItems(AWS, 'games');
            response = {
                statusCode: 200,
                body: JSON.stringify(games)
            }
            break;
        case event.routeKey === "POST /games":
            const newGame = JSON.parse(event.body);
            const insert = await addItem(AWS, "games", newGame);
            response = {
                statusCode: 200,
                body: JSON.stringify(newGame)
            }
            break;
        case event.routeKey === "GET /players":
            const players = await loadAllItems(AWS, "players");
            response = {
                statusCode: 200,
                body: JSON.stringify(players)
            }
            break;
        default:
            response = {
                statusCode: 400,
                body: JSON.stringify("no path")
            }

    }
    return response;
};
