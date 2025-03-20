import Input from "../ui/Input";

function Form() {
  return (
    <div>
      <Input label="name">
        <input className="input" type="text" placeholder="Your name" />
      </Input>
    </div>
  );
}

export default Form;
