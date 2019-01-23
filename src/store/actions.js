// import axios from 'axios';

import * as types from './types';

let actions={
  [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
  [types.VIEW_FOOT]:({commit,state},payload)=>commit(types.VIEW_FOOT,payload),
  // [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
};
export default actions;