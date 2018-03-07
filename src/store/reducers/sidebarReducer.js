import * as SidebarActions from "../actions/sidebarActions";
import {sidebarHandleClick} from '../../utils/sidebarDataTransformation'

const defaultState = {
    sidebar: [],
    collapsed: true,
    expandedOnHover: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SidebarActions.ACTION_SIDEBAR_INITIALIZE:
            return {
                ...state,
                ...action.payload
            };
        case SidebarActions.ACTION_SIDEBAR_COLLAPSE:
            return {
                ...state,
                collapsed: true
            };
        case SidebarActions.ACTION_SIDEBAR_EXPAND:
            return {
                ...state,
                collapsed: false
            };
        case SidebarActions.ACTION_SIDEBAR_TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            };
        case SidebarActions.ACTION_SIDEBAR_ON_HOVER_EXPANDED:
            return {
                ...state,
                expandedOnHover: true
            };
        case SidebarActions.ACTION_SIDEBAR_ON_HOVER_COLLAPSED:
            return {
                ...state,
                expandedOnHover: false
            };
        case SidebarActions.ACTION_SIDEBAR_HANDLE_CLICK_ITEM:
            return {
                ...state,
                sidebar: sidebarHandleClick(state, action.payload)
            };
        default:
            return state;
    }
}