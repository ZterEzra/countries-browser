import { createAction, props } from '@ngrx/store';
import { CountryList } from '../../../app.models';

export const loadCountriesSuccess = createAction(
  '[Country API] Load Success',
  props<{ countries: CountryList[] }>()
);

export const loadCountriesFailure = createAction(
  '[Country API] Load Fail',
  props<{ error: string }>()
);
