import * as Yup from 'yup';

export const CreateApartmentSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Nome muito pequeno!').max(25, 'Nome muito grande!').required('Campo obrigatório'),
  number: Yup.number().required('Campo obrigatório'),
  block: Yup.string()
    .min(1, 'Identificação do bloco pequena!')
    .max(50, 'Identificação do bloco grande!')
    .required('Campo obrigatório'),
});
