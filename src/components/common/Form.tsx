import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FormControl } from './FormsControl'
import { maxLengthCreator, required } from '../../utils/validators/validators'

type FormType = {
  newBody: string
}
const maxLength30 = maxLengthCreator(30)
export const Form: React.FC<InjectedFormProps<FormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Enter your text'}
          name={'newBody'}
          component={FormControl}
          tagName='textarea'
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm<FormType>({
  form: 'AddMessageForm',
})(Form)
