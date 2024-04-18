import { Field, InjectedFormProps, reduxForm } from 'redux-form'

type FormType = {
  newBody: string
}

export const Form: React.FC<InjectedFormProps<FormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={'textarea'}
          name={'newBody'}
          placeholder='Enter your message'
        />
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm<FormType>({
  form: 'AddMessageForm',
})(Form)
