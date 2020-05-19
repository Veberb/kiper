import * as Yup from 'yup';

export const UserSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string().min(3, 'Muito fraquinha a senha :/').required('Campo obrigatório'),
});
