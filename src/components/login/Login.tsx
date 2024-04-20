import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FormControl } from '../common/FormsControl'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppRootStateType } from '../../redux/redux-store'
import s from './login.module.css'

type FormData = {
  login: string
  password: string
  rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30)
const maxLength20 = maxLengthCreator(20)

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
            validate={[required, maxLength30]}
          />
        </div>
        <div>
          <Field
            placeholder='password'
            type={'password'}
            name={'password'}
            component={FormControl}
            tagName='input'
            validate={[required, maxLength20]}
          />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
        </div>
        {props.error && <div className={s.fieldError}>{props.error}</div>}
        <div>
          <button>LOGIN</button>
        </div>
      </form>
    </>
  )
}

const LoginReduxForm = reduxForm<FormData>({ form: 'login' })(LoginForm)

const Login = (props: any) => {
  const onSubmit = (formData: FormData) => {
    props.login(formData.login, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <>
      <h2>LOGIN</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}

const mapStateToProps = (state: AppRootStateType) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
