import Input from "../ui/Input";

function Form() {
  return (
    <form>
      <Input label="name">
        <input className="input" type="text" placeholder="Your name" />
      </Input>

      <Input label="email">
        <input className="input" type="text" placeholder="Your name" />
      </Input>

      <Input label="password">
        <input className="input" type="text" placeholder="Your name" />
      </Input>
    </form>
  );
}

export default Form;
