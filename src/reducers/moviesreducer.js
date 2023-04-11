import data from "../React-5/danhSachGhe.json";

const initialState = {
    card: [],
    tongGhe : data
}

function moviesReducer(state = initialState, action) {
    // console.log(state.card);
    switch (action.type) {
        case "movies/seat_book": {
            const seat  = action.payload;
            let card;
            const tongGhe = (state.tongGhe).map((row) => {
                const danhSachGhe = (row.danhSachGhe).map((item) => {
                    if(seat.soGhe === item.soGhe) {
                        card = [...state.card, item];
                        return { ...item, dangChon: true}
                    } 
                    return item;
                })
                return {...row, danhSachGhe}
            })
            return {...state, tongGhe, card}
        }

        case "movies/seat_remove" : {
            const seat  = action.payload;
            // console.log(seatCode);
            let card = (state.card).filter((item) => seat.soGhe !== item.soGhe)
            const tongGhe = (state.tongGhe).map((row) => {
                const danhSachGhe = (row.danhSachGhe).map((item) => {
                    if(seat.soGhe === item.soGhe) {
                        return { ...item, dangChon: false}
                    } 
                    return item;
                })
                return {...row, danhSachGhe}
            })
            return {...state, tongGhe,card}
            }

        default:
            return state;
        }
    };



export default moviesReducer;