import { Field, InjectedFormProps, reduxForm } from 'redux-form'

type FormData = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormData>> = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder='login' name={'login'} component={'input'} />
        </div>
        <div>
          <Field placeholder='password' name={'password'} component={'input'} />
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
