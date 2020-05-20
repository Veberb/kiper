import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import moment from 'moment';

import { ResidentMutation, ResidentQuery } from '../../services/apollo';
import ResidentForm from '../../components/Resident/ResidentForm';

export default function EditResident() {
  const { id } = useParams();
  const { addToast } = useToasts();

  const [initialValues, setInitialValues] = useState({
    name: '',
    birth: '',
    phone: '',
    cpf: '',
    email: '',
    responsible: false,
    apartment: '',
  });
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await updateResident({ variables: { resident: values, id } });
      formik.setSubmitting(false);
      history.goBack();
    },
  });

  const setFormikInitialValue = (value) => {
    setInitialValues({ ...value.getResident, birth: moment(Number(value.getResident.birth)).format('yyyy-MM-DD') });
  };

  const { loading } = useQuery(ResidentQuery.GET_RESIDENT, {
    variables: { id },
    onCompleted: setFormikInitialValue,
  });

  const [updateResident] = useMutation(ResidentMutation.UPDATE_RESIDENT, {
    onError: (err) => {
      addToast(err.graphQLErrors[0].message, { appearance: 'error' });
    },
    onCompleted: () => {
      addToast('Morador atualizado!', { appearance: 'success' });
      formik.setSubmitting(false);
      history.goBack();
    },
  });
  const history = useHistory();

  if (loading) return 'Carregando morador';

  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Editar Morador</h1>
        </div>
        {!loading && <ResidentForm formik={formik} />}
      </Container>
    </React.Fragment>
  );
}
