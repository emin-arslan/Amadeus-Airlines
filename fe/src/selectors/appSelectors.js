import { createSelector } from "reselect";
export const getApp = state => state.app;

export const getIsMobile = createSelector([getApp], app => {
    return app.isMobile;
});