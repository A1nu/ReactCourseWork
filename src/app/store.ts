import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import civilizationsReducer from "../features/civilizations/civilizationsSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    civilizations: civilizationsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useTypedSelector: TypedUseSelectorHook<
    RootState
    > = useSelector;
