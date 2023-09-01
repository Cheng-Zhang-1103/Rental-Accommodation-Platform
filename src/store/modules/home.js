// 发送异步请求
import {
    getHomeGoodPriceData,
    getHomeHighScoreData,
    getHomeDiscountData,
    getHomeHotRecommendData,
    getHomeLongforData,
    getHomePlusData
} from '@/services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {

    // goodprice
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })

    // highscore
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })

    // discount
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })

    // hotrecommond
    getHomeHotRecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })

    // longfor
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    })

    // plus
    getHomePlusData().then(res => {
        dispatch(changePlusInfoAction(res))
    })
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
        plusInfo: {}
    },

    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },

        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },

        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },

        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },

        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        },

        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload
        }
    },
    extraReducers: {
        // [fetchHomeDataAction.fulfilled](state, { payload }) {
        //     console.log(payload);
        //     state.goodPriceInfo = payload
        // }
    }
})

export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer