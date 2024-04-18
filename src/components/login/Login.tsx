import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FormControl } from '../common/FormsControl'
import { maxLengthCreator, required } from '../../utils/validators/validators'

type FormData = {
  login: string
  password: string
  rememberMe: boolean
}

const maxLength20 = maxLengthCreator(20)
const maxLength10 = maxLengthCreator(10)

export const LoginForm: React.FC<InjectedFormProps<FormData>> = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder='login'
            name={'login'}
            component={FormControl}
            tagName='input'
            validate={[required, maxLength20]}
          />
        </div>
        <div>
          <Field
            placeholder='password'
            type={'password'}
            name={'password'}
            component={FormControl}
            tagName='input'
            validate={[required, maxLength10]}
          />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'} />{' '}
          remember me
        </div>
        <div>
          <button>LOGIN</button>
        </div>
      </form>
    </>
  )
}

const LoginReduxForm = reduxForm<FormData>({ form: 'login' })(LoginForm)

export const Login = () => {
  const onSubmit = (formData: FormData) => {
    console.log(formData)
  }
  return (
    <>
      <h2>LOGIN</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}
