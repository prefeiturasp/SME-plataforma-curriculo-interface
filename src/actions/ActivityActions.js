const ActivityActions = {
  LOADED: 'AA_LOADED',
  
  load() {
    return { type: ActivityActions.LOADED };
  },
};

export default ActivityActions;
