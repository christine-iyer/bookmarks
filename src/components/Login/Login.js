export default function Login ({
     login, 
     credentials, 
     handleChangeAuth
}) {
     return (
          <>
          <h2>Login Happens Here</h2>
          <form onSubmit={(event) => {
               event.preventDefault()
               login()
          }}
          >
               <input type = 'text' 
               value= {credentials.email}
               name='email'
               onChange={handleChangeAuth}
               placeholder="Fill in With Your Email"/>
               <input type = 'password' 
               value= {credentials.password}
               name='password'
               onChange={handleChangeAuth}
               placeholder="Fill in With Your Password"/>
               </form>
          </>
     )
}