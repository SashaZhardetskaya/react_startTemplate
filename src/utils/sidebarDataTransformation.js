export const sidebarHandleClick = (state, payload) => (
    state.sidebar.map((cat) => {
        return {
            ...cat,
            items: cat.items.map((item) => {
                item.expanded = false;
                if (item === payload.item) {
                    return {
                        ...item,
                        expanded: true
                    }
                }
                return item;
            })
        }
    })
);