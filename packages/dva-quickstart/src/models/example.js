
export default {

  namespace: 'example',

  state: {
    '11':33
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      debugger;
      return { ...state, ...action.payload };
    },
  },

};
