import * as Yup from 'yup';
import * as Custom from '../Custom';
import moment from 'moment';

export const ResidentSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Nome muito pequeno!').max(25, 'Nome muito grande!').required('Campo obrigatório'),
  cpf: Yup.string().cpf().required('Campo obrigatório'),
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  phone: Yup.string().phone().required(),
  birth: Yup.date().max(moment().add(1, 'days'), 'Data não pode ser maior que hoje'),
});
