import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        player1:player1Reducer,
        player2:player2Reducer
    }
})


let player1 = {
    RealBoard:[
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-']
    ],
    FakeBoard:[
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-']
    ],
    isTurn:false,
}

let player2 = {
    board:[
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-'],
        ['-','-','-','-','-']
    ],
    isTurn:false,
}

