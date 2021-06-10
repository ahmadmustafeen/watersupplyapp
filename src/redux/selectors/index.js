export const checkIfLoading = (store, ...actionsToCheck) =>
    store.uiReducer.loader.actions.some((action) =>
        actionsToCheck.includes(action.name)
    );

export const checkIfRefreshing = (store, actionToCheck) =>
    store.uiReducer.loader.refreshing.some((action) => action === actionToCheck);


