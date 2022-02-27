const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const AWS = require('aws-sdk')
const addItem = require("./src/add_item")
const loadItem = require("./src/load_item")
const loadAllItems = require("./src/load_all_items")
const listenContractEvents = require("./src/listen_contract_events")

AWS.config.update({
    region: 'us-east-1'
});

; (async (event) => {
    listenContractEvents();


    app.use(express.json())
    app.get('/', (req, res) => res.send('ping'));

    app.get('/games', async (req, res) => {
        const games = await loadAllItems(AWS, 'games');
        res.send({ games });
    });

    app.post('/games', async (req, res) => {
        const { game } = req.body;
        const result = await addItem(AWS, "games", game);
        res.send({ result });
    });

    app.get('/players', async (req, res) => {
        const players = await loadAllItems(AWS, 'players');
        res.send({ players });
    });

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})();
