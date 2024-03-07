import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom"
import { signin } from '../api/auth.api'
import Button from "../components/common/Button"
import { InputText } from "../components/common/InputText"
import Title from "../components/common/Title"
import { useAlert } from '../hooks/useAlert'
import { useAuthStore } from '../store/authStore'
import { SingupStyle } from './Signup'

export interface SigninProps {
  email: string;
  password: string;
}

const Signin = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();
  const { register, handleSubmit, formState: { errors } } = useForm<SigninProps>();

  const { isLoggedIn: isloggedIn, storeLogin } = useAuthStore();

  const onSubmit = (data: SigninProps) => {
    signin(data).then((res) => {
      storeLogin(res.data)
      showAlert('로그인 완료되었습니다.')
      navigate('/')
    }, (error) => {
      showAlert('로그인에 실패했습니다.')
    })
  }

  return (
    <>
      <Title size="large">로그인</Title>
      <SingupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register('email', { required: true })}
            />
            {errors.email && <p className='error-text'>이메일을 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <InputText
              placeholder="패스워드"
              inputType="password"
              {...register('password', { required: true })}
            />
            {errors.password && <p className='error-text'>비밀번호를 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <Button type="submit" size='medium' scheme="primary">
              로그인
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SingupStyle>
    </>
  )
}

export default Signin
