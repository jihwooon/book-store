import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { resetPassword, resetRequest } from '../api/auth.api'
import Button from "../components/common/Button"
import { InputText } from "../components/common/InputText"
import Title from "../components/common/Title"
import { useAlert } from '../hooks/useAlert'
import { SingupStyle } from './Signup'

export interface SignupProps {
  email: string;
  password: string;
  name: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [ resetRequested, setResetRequested ] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    if(resetRequested) {
      resetPassword(data).then(() => {
        showAlert('비밀번호가 초기화되었습니다.');
        navigate('/login');
      })
    } else {
      resetRequest(data).then(() => {
          setResetRequested(true);
      })
    }
  }

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
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
          {resetRequested && (
           <fieldset>
             <InputText
               placeholder="패스워드"
               inputType="password"
               {...register('password', { required: true })}
            />
             {errors.password && <p className='error-text'>비밀번호를 입력해주세요.</p>}
           </fieldset>
          )}
          <fieldset>
            <Button type="submit" size='medium' scheme="primary">
              {resetRequested ? "비밀번호 요청" : "초기화 요청"}
            </Button>
          </fieldset>
        </form>
      </SingupStyle>
    </>
  )
}


export default ResetPassword
