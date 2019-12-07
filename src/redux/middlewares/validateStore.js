import tv4 from 'tv4';
import schema from '../schemas/schema.json';

const storeValidation = store => next => action => {
  next(action);
  const isValid = tv4.validate(store.getState(), schema);

  if (!isValid) {
    throw new Error(tv4.error);
  }
};

export default storeValidation;
