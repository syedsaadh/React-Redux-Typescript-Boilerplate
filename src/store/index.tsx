import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { StoreState } from '../types/index';

export const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});