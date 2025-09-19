const LoginForm = () => {
  return (
    <>
      <form className="flex flex-col gap-3 mt-20 w-[20rem] h-[15rem] p1-20">
        <input type="email" placeholder="Username" className="w-[15rem] p-1 border border-stone-500 rounded-none"/>
        <input type="password" placeholder="Password" className="w-[14rem] p-1 border border-slate-500 rounded-none" />
        <button type="submit">Login</button>
      </form>
      <span>If you do not have Account <span>Register</span></span>
    </>
  );
};

export default LoginForm;