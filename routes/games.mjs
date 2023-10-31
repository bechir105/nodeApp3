import express from 'express';


// 3rd update


import { getAll, addOnce, getOnce, putOnce, patchOnce, deleteOnce } from '../controllers/games.mjs';


const router = express.Router();


// 3rd update


router
    .route('/')
    .get(getAll)
    .post(addOnce);

router  
    .route('/:name')
    .get(getOnce)
    .put(putOnce)
    .patch(patchOnce)
    .delete(deleteOnce);    



//  2nd update 


// class Game {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const games = [new Game("dmc5", 2019), new Game("re8", 2021), new Game("nfs", 2019)];


//  2nd update 



// router 
//     .route('game')

//     .get((req, res) => {
//         res.status(200).json(games); 
//     })

//     .post((req, res)=>{
//         console.log('Request Body:', req.body);
//     const game = new Game(req.body.name, req.body.year);
//     console.log('Game Object:', game);
//     games.push(game);
//     res.status(201).json({ message: "Created!", entity: game }); 
//     })

//  1st update 


// router.get('/game', (req, res) => {
//     res.status(200).json(games);
// })


// router.post('/game', (req, res) => {
//     console.log('Request Body:', req.body);
//     const game = new Game(req.body.name, req.body.year);
//     console.log('Game Object:', game);
//     games.push(game);
//     res.status(201).json({ message: "Created!", entity: game });
// });



//  2nd update 


// router
//     .route('/game/:name')

//     .get((req, res) =>{
//         const game = games.find((game) => game.name === req.params.name);
    
//     if (game) {
//         res.status(200).json(game);
//     } else {
//         res.status(404).json({ message: "Game not found" });
//     }  
//     })

//     .put((req, res) =>{
//         res.status(200).json({message: "Updated !", name: req.params.name});
//     })

//     .patch((req, res) =>{
//         res.status(200).json({message: "Deleted !", name: req.params.name});

//     })

//     .delete((req, res) =>{
//         res.status(200).json({message: "Deleted !", name: req.params.name});
  
//     })


//  1st update 


// router.get('/game/:name', (req, res) => {
//     const game = games.find((game) => game.name === req.params.name);
    
//     if (game) {
//         res.status(200).json(game);
//     } else {
//         res.status(404).json({ message: "Game not found" });
//     }
// })

// router.put('/game/:name', (req, res)=> {
//     res.status(200).json({message: "Updated !", name: req.params.name});
// })

// router.patch('/game/:name', (req, res)=> {
//     res.status(200).json({message: "Updated !", name: req.params.name});
// })

// router.delete('/game/:name', (req, res)=> {
//     res.status(200).json({message: "Deleted !", name: req.params.name});
// })



export default router;
