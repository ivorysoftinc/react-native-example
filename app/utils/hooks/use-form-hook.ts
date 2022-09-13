import { useCallback, useState } from 'react';
import { ObjectShape, TypeOfShape } from 'yup/lib/object';
import { ObjectSchema } from 'yup';

type FormFields = Record<string, unknown>;
type FormSchema<T extends ObjectShape> = ObjectSchema<T, FormFields, TypeOfShape<T>>;

type FormState<T extends ObjectShape> = TypeOfShape<T>;
type SetFormStateAction<T extends ObjectShape> = (update: Partial<FormState<T>>) => void;

/**
 * Custom hook to turn a yup schema to a state
 * @param schema Yup schema of the form
 * @param initialState Initial state of the yup schema
 * @returns A stateful value, and a function to update it
 *
 * @example
 * const [logInFormState, updateLogInFormState] = useForm(LogInSchema);
 * // ...
 * try {
 *   await LogInSchema.validate(logInFormState);
 * } catch(e) {
 *   console.log('Validation error', e);
 * }
 */
export function useForm<T extends ObjectShape>(
  schema: FormSchema<T>,
  initialState?: Partial<FormState<T>>,
): [FormState<T>, SetFormStateAction<T>] {
  const [state, setState] = useState({ ...schema.getDefault(), ...initialState });

  const updateForm = useCallback((update: Partial<FormState<T>>) => {
    setState((base) => ({ ...base, ...update }));
  }, []);

  return [state, updateForm];
}
