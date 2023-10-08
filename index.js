const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.use((express.urlencoded({ extended:false })));

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({

        test: "novitest"
    });
})

app.post('/', (req, res) => {

    let string = req.body.string;

    console.log(string);

    res.status(200);
});



app.listen(process.env.PORT || PORT, 
    () => {console.log('listening on port '+PORT+`. http://localhost:${PORT}`);}
);