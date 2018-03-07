import sidebar from '../../data/sidebar';

export const ACTION_SIDEBAR_INITIALIZE = 'ACTION_SIDEBAR_INITIALIZE';
export const ACTION_SIDEBAR_COLLAPSE = 'ACTION_SIDEBAR_COLLAPSE';
export const ACTION_SIDEBAR_EXPAND = 'ACTION_SIDEBAR_EXPAND';
export const ACTION_SIDEBAR_TOGGLE_COLLAPSED = 'ACTION_SIDEBAR_TOGGLE_COLLAPSED';
export const ACTION_SIDEBAR_ON_HOVER_EXPANDED = 'ACTION_SIDEBAR_ON_HOVER_EXPANDED';
export const ACTION_SIDEBAR_ON_HOVER_COLLAPSED = 'ACTION_SIDEBAR_ON_HOVER_COLLAPSED';
export const ACTION_SIDEBAR_HANDLE_CLICK_ITEM = 'ACTION_SIDEBAR_HANDLE_CLICK_ITEM';

export function getSidebarInitialAction() {
    return {
        type: ACTION_SIDEBAR_INITIALIZE,
        payload: { sidebar }
    }
}

export function toggleSidebarCollapsedAction() {
    return { type: ACTION_SIDEBAR_TOGGLE_COLLAPSED };
}

export function setSidebarExpandedOnHover() {
    return { type: ACTION_SIDEBAR_ON_HOVER_EXPANDED};
}

export function setSidebarCollapsedOnHover() {
    return { type: ACTION_SIDEBAR_ON_HOVER_COLLAPSED};
}

export function setSidebarHandleClickMenuItem(item) {
    return {
        type: ACTION_SIDEBAR_HANDLE_CLICK_ITEM,
        payload: {item}
    }
}