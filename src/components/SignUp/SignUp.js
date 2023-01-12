export default function SignUp ({
     credentials, 
     signUp, 
     handleChangeAuth
}) {
     return (
          <>   <h2>Sign Up</h2>
          <form onSubmit={(event) => {
               event.preventDefault()
               signUp()
          }}>
               <input type='text' 
               value={credentials.email} 
               name='email' 
               onChange={handleChangeAuth} 
               placeholder='Email' />
               
                <input type='text' 
               value={credentials.name} 
               name='name' 
               onChange={handleChangeAuth} 
               placeholder='Name' />

               <input type='password' 
               value={credentials.password} 
               name='Top Secret' 
               onChange={handleChangeAuth} 
               placeholder='Top Secret' />
               <input type='submit' value="Join Us by Signing Up"/>
</form>
          
          
          
          </>
     )
}