import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    document.write(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row" id="dv-form">
        <div className="col-md-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label>Name:</label>
          <input
            /* eslint-disable react/jsx-props-no-spreading */
            {...register('name', { required: 'Name is required' })}
            type="text"
            className="form-control"
          />
          {errors.name && <span className="spn-error">{errors.name.message}</span>}
        </div>
        <div className="col-md-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label>Email:</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email',
              },
            })}
            type="text"
            className="form-control"
          />
          {errors.email && <span className="spn-error">{errors.email.message}</span>}
        </div>
        <div className="col-md-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label>Subject:</label>
          <input
            {...register('subject', { required: 'Subject is required' })}
            type="text"
            className="form-control"
          />
          {errors.subject && <span className="spn-error">{errors.subject.message}</span>}
        </div>
        <div className="col-md-12 mt-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label>Message:</label>
          <textarea
            {...register('message', { required: 'Message is required' })}
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
