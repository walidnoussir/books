import Input from "../ui/Input";

function SignUp() {
  return (
    <div>
      <Input label="name">
        <input className="input" type="text" placeholder="Your name" />
      </Input>
    </div>
  );
}

export default SignUp;
