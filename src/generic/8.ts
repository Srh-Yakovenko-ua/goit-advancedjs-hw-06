/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/

type Nullable<T> = T | null;

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: Nullable<string>
  firstName: Nullable<string>
  lastName: Nullable<string>
  phone: Nullable<string>
  errors: Errors;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

export {};