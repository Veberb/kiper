import * as Yup from 'yup';

const rePhoneNumber = /(\(?\d{2}\)?\s)?(\d{4,5}\-?\d{4})/;
const validateCpf = (v) => {
  if (!v || v.length !== 11) return false;

  let sum = 0;
  let remain;

  for (let i = 1; i <= 9; i += 1) sum += parseInt(v.substring(i - 1, i), 10) * (11 - i);

  remain = (sum * 10) % 11;

  if (remain === 10 || remain === 11) remain = 0;

  if (remain !== parseInt(v.substring(9, 10), 10)) return false;

  sum = 0;

  for (let i = 1; i <= 10; i += 1) sum += parseInt(v.substring(i - 1, i), 10) * (12 - i);

  remain = (sum * 10) % 11;
  if (remain === 10 || remain === 11) remain = 0;
  if (remain !== parseInt(v.substring(10, 11), 10)) return false;

  return true;
};

Yup.addMethod(Yup.string, 'phone', function () {
  return this.test('phone', 'Telefone inválido', (value) => rePhoneNumber.test(value));
});

Yup.addMethod(Yup.string, 'cpf', function (message) {
  return this.test('cpf', message || 'número de CPF inválido', (value) => validateCpf(value));
});
