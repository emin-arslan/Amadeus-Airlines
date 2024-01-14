import { createSelector } from "reselect";
export const getUi = state => state.ui;

export const getAirportNamesSelector = createSelector([getUi], ui => {
    return ui.airportNames;
});

export const getFlightRoutesSelector = createSelector([getUi], ui => {
    return ui.flightRoutes;
});