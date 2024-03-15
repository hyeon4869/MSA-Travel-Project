
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import PaymentPaymentManager from "./components/listers/PaymentPaymentCards"
import PaymentPaymentDetail from "./components/listers/PaymentPaymentDetail"

import FlightReservationFlightReservationManager from "./components/listers/FlightReservationFlightReservationCards"
import FlightReservationFlightReservationDetail from "./components/listers/FlightReservationFlightReservationDetail"

import UserUserManager from "./components/listers/UserUserCards"
import UserUserDetail from "./components/listers/UserUserDetail"


import FlightFlightManager from "./components/listers/FlightFlightCards"
import FlightFlightDetail from "./components/listers/FlightFlightDetail"

import LodgingLodgingManager from "./components/listers/LodgingLodgingCards"
import LodgingLodgingDetail from "./components/listers/LodgingLodgingDetail"
import LodgingLodgingDetailManager from "./components/listers/LodgingLodgingDetailCards"
import LodgingLodgingDetailDetail from "./components/listers/LodgingLodgingDetailDetail"
import LodgingRoomManager from "./components/listers/LodgingRoomCards"
import LodgingRoomDetail from "./components/listers/LodgingRoomDetail"
import LodgingLodgingIntroManager from "./components/listers/LodgingLodgingIntroCards"
import LodgingLodgingIntroDetail from "./components/listers/LodgingLodgingIntroDetail"

import LodgingReservationLodgingReservationManager from "./components/listers/LodgingReservationLodgingReservationCards"
import LodgingReservationLodgingReservationDetail from "./components/listers/LodgingReservationLodgingReservationDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/payments/payments',
                name: 'PaymentPaymentManager',
                component: PaymentPaymentManager
            },
            {
                path: '/payments/payments/:id',
                name: 'PaymentPaymentDetail',
                component: PaymentPaymentDetail
            },

            {
                path: '/flightReservations/flightReservations',
                name: 'FlightReservationFlightReservationManager',
                component: FlightReservationFlightReservationManager
            },
            {
                path: '/flightReservations/flightReservations/:id',
                name: 'FlightReservationFlightReservationDetail',
                component: FlightReservationFlightReservationDetail
            },

            {
                path: '/users/users',
                name: 'UserUserManager',
                component: UserUserManager
            },
            {
                path: '/users/users/:id',
                name: 'UserUserDetail',
                component: UserUserDetail
            },


            {
                path: '/flights/flights',
                name: 'FlightFlightManager',
                component: FlightFlightManager
            },
            {
                path: '/flights/flights/:id',
                name: 'FlightFlightDetail',
                component: FlightFlightDetail
            },

            {
                path: '/lodgings/lodgings',
                name: 'LodgingLodgingManager',
                component: LodgingLodgingManager
            },
            {
                path: '/lodgings/lodgings/:id',
                name: 'LodgingLodgingDetail',
                component: LodgingLodgingDetail
            },
            {
                path: '/lodgings/lodgingDetails',
                name: 'LodgingLodgingDetailManager',
                component: LodgingLodgingDetailManager
            },
            {
                path: '/lodgings/lodgingDetails/:id',
                name: 'LodgingLodgingDetailDetail',
                component: LodgingLodgingDetailDetail
            },
            {
                path: '/lodgings/rooms',
                name: 'LodgingRoomManager',
                component: LodgingRoomManager
            },
            {
                path: '/lodgings/rooms/:id',
                name: 'LodgingRoomDetail',
                component: LodgingRoomDetail
            },
            {
                path: '/lodgings/lodgingIntros',
                name: 'LodgingLodgingIntroManager',
                component: LodgingLodgingIntroManager
            },
            {
                path: '/lodgings/lodgingIntros/:id',
                name: 'LodgingLodgingIntroDetail',
                component: LodgingLodgingIntroDetail
            },

            {
                path: '/lodgingReservations/lodgingReservations',
                name: 'LodgingReservationLodgingReservationManager',
                component: LodgingReservationLodgingReservationManager
            },
            {
                path: '/lodgingReservations/lodgingReservations/:id',
                name: 'LodgingReservationLodgingReservationDetail',
                component: LodgingReservationLodgingReservationDetail
            },



    ]
})
