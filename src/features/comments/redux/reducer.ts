import type { Reducer } from 'redux';
import type { Nullable } from '../../../ts-types';

//import * as types from './types';

const INITIAL_STATE = {
  isLoading: false,
  error: null as Nullable<Error>,
};

const reducer: Reducer<typeof INITIAL_STATE> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
