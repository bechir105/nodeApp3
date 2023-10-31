import Game from '../models/games.mjs'

//const games = [new Game("dmc5", 2019, true), new Game("re8", 2021, false), new Game("nfs", 2019, true)];
const newGame = new Game({
    name: 'dmc5',
    year: 2019,
    onSale: false
});

newGame.save()
    .then(savedGame => {
        console.log('Game saved:', savedGame);
    })
    .catch(error => {
        console.error('Error saving game:', error);
    });

export function getAll(req, res){

    //1st update

    // res.status(200).json(games);

    //2nd update

    // Game
    // .find({})
    // .then(docs => {
    //     res.status(200).json(docs);
    // })
    // .catch(err => {
    //     res.status(500).json({error: err});
    // });


    //3rd update

    Game
    .find({})
    .where('onSale').equals(true)
    .where('year').gt(2000).lt(2022)
    .where('name').in(['DMC5','RE8','NFS'])
    .limit(10)
    .sort('-year')
    .select('name')
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({error: err});
    });
}

export function addOnce(req, res){


    // 1st update

    // const game = new Game(req.body.name, req.body.year);
    // games.push(game);
    // res.status(201).json({message: "Created !", entity: game});



    //2nd update


    // const game = new Game({
    //     name: req.body.name,
    //     year: req.body.year,
    //     onSale: req.body.onSale
    // });

    // game
    // .save()
    // .then(newGame => {
    //     res.status(200).json(newGame);
    // })
    // .catch(err =>{
    //     res.status(500).json({error: err});
    // });

    //4th update


    // const game = new Game(req.body);

    // game
    // .save()
    // .then(newGame => {
    //     res.status(200).json(newGame);
    // })
    // .catch(err => {
    //     res.status(500).json({error : err});
    // })


    //3rd update


    // Game
    // .create({
    //     name: req.body.name,
    //     year: req.body.year,
    //     onSale: req.body.onSale
    // })

    // .then(newGame =>{
    //     res.status(200).json(newGame);
    // })

    // .catch(err => {
    //     res.status(500).json({error : err});
    // });


   
    //5th update


    Game
    .create(req.body)
    .then(newGame =>{
        res.status(200).json(newGame);
    })
    .catch (err => {
        res.status(500).json({error : err});
    });


}

export function getOnce(req, res){

    //1st update

    // res.status(200).json(games.find(val => val.name === req.params.name));

    //2nd update

    // Game 
    // .findOnce({"name": req.params.name})
    // .then(doc => {
    //     res.status(200).json(doc);
    // })
    // .catch(err =>{
    //     res.status(500).json({error: err});
    // });

    //3rd update (by Id)

    // Game 
    // .findById(req.params.id)
    // .then(doc => {
    //     res.status(200).json(doc);
    // })
    // .catch(err =>{
    //     res.status(500).json({error: err});
    // });

    //4th update

    const gameId = req.params.id; // or req.params.name
    console.log('Querying game with ID or Name:', gameId);

    Game.findById(gameId)
        .then(doc => {
            console.log('Retrieved Game:', doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ error: 'Game not found' });
            }
        })
        .catch(err => {
            console.error('Error retrieving game:', err);
            res.status(500).json({ error: err });
        });
}

export function putOnce(req, res){

    //1st update

    // res.status(200).json({ message: "Updated !", name: req.params.name});

    //2nd update

    Game
    .updateMany({}, {"onSale": true})
    .then(doc =>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error: err});
    });
}

export function patchOnce (req, res){

    //1st update

    // res.status(200).json({ message: "Updated !", name: req.params.name});

    //2nd update

    Game
    .findOneAndUpdate({"name": req.params.name}, {"onSale": false})
    .then(doc =>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({ error: err});
    })
}

export function deleteOnce(req, res){

    //1st update 

    // res.status(200).json({ message: "Deleted !", name: req.params.name});

    //2nd update

    Game
    .findOneAndRemove({"name": req.params.name})
    .then(doc =>{
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({error: err});
    });
}