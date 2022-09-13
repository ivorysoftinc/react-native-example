import { string, object } from 'yup';

export const PersonalInformationSchema = object({
  firstName: string().required().default('').label('First Name'),
  lastName: string().required().default('').label('First Name'),
  email: string().required().default('').email().label('Email'),
  phoneNumber: string().required().default('').label('Mobile Number'),
  street: string().default('').label('Street'),
  city: string().default('').label('City'),
  state: string().default('').label('State'),
  zipCode: string().default('').label('Zip Code'),
});
