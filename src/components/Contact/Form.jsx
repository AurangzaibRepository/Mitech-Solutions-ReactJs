/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Messages is required'),
}).required();

function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    document.write(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row" id="dv-form">
        <div className="col-md-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="name">Name:</label>
          <input
            /* eslint-disable react/jsx-props-no-spreading */
            {...register('name')}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <span className="spn-error">{errors.name.message}</span>}
        </div>
        <div className="col-md-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="email">Email:</label>
          <input
            {...register('email')}
            id="email"
            type="text"
            className="form-control"
          />
          {errors.email && <span className="spn-error">{errors.email.message}</span>}
        </div>
        <div className="col-md-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="subject">Subject:</label>
          <input
            {...register('subject')}
            id="subject"
            type="text"
            className="form-control"
          />
          <span className="spn-error">{errors.subject?.message}</span>
          {errors.subject && <span className="spn-error">{errors.subject.message}</span>}
        </div>
        <div className="col-md-12 mt-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="message">Message:</label>
          <textarea
            {...register('message')}
            id="message"
            className="form-control"
          />
          {errors.message && <span className="spn-error">{errors.message.message}</span>}
        </div>
        <div className="col-md-12 mt-3 d-flex justify-content-end">
          <input type="submit" className="btn btn-primary" value="Send" />
        </div>
      </div>
    </form>
  );
}

export default Form;
