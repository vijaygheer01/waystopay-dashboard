import React from 'react'
import LoginForm from '@/components/authentication/LoginForm'

const LoginCover = () => {
  return (
    <main className="auth-cover-wrapper">
      <div className="auth-cover-content-inner">
        <div className="auth-cover-content-wrapper">
          <div className="auth-img">
            <img src="/images/auth/auth-cover-login-bg.svg" alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="auth-cover-sidebar-inner">
        <div className="auth-cover-card-wrapper">
          <div className="auth-cover-card p-sm-5">
            <div className="wd-150 mb-5">
            <img src="/images/icons/image-1.png" alt='img' className="img-fluid" />
            {/* <img src="/images/icons/waystopay.png" alt='img' className="img-fluid" /> */}
            </div>
            <LoginForm registerPath={"/authentication/register/cover"} resetPath={"/forgot-password"}/>
          </div>
        </div>
      </div>
    </main>

  )
}

export default LoginCover