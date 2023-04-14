import data from "../React-5/danhSachGhe.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    tongGhe : data
}
const moviesReducer = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        seat_book: (state, action) => {
            const seat  = action.payload;
            let carts;
            const tongGhe = (state.tongGhe).map((row) => {
                const danhSachGhe = (row.danhSachGhe).map((item) => {
                    if(seat.soGhe === item.soGhe) {
                        carts = [...state.carts, item];
                        return { ...item, dangChon: true}
                    } 
                    return item;
                })
                return {...row, danhSachGhe}
            })
            return {...state, tongGhe, carts}
        },
        seat_remove: (state, action) => {
            const seat  = action.payload;
            // console.log(seatCode);
            let carts = (state.carts).filter((item) => seat.soGhe !== item.soGhe)
            const tongGhe = (state.tongGhe).map((row) => {
                const danhSachGhe = (row.danhSachGhe).map((item) => {
                    if(seat.soGhe === item.soGhe) {
                        return { ...item, dangChon: false}
                    } 
                    return item;
                })
                return {...row, danhSachGhe}
            })
            return {...state, tongGhe,carts}
        },
    },
})

export const {seat_book, seat_remove} = moviesReducer.actions;

export default moviesReducer.reducer;
