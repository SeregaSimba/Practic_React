import "./registration.css";
import { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [pass, setPass] = useState("");
  // const [result, setResult] = useState<{
  //   name?: string;
  //   age?: string;
  //   pass?: string;
  // }>({});
  const [errors, setErrors] = useState<{
    name?: string;
    age?: string;
    pass?: string;
  }>({});

  function inputName(e: any) {
    const value = e.target.value;
    setName(value);
  }

  function inputAge(e: any) {
    const res = e.target.value;
    setAge(res);
  }

  function inputPass(e: any) {
    const res = e.target.value;
    setPass(res);
  }

  function validate() {
    const newErrors: { name?: string; age?: string; pass?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Требуется указать имя";
    }
    if (!age.trim()) {
      newErrors.age = "Требуется возраст";
    } else if (
      !/^\d+$/.test(age) ||
      Number(age) <= 0 ||
      Number(age) <= 17 ||
      Number(age) > 100
    ) {
      newErrors.age = `не коректный возраст ${age}`;
    }
    if (!pass.trim()) {
      newErrors.pass = "Требуется ввести пароль";
    } else if (pass.length < 6) {
      newErrors.pass = "Пароль должен содержать не менее 6 символов";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function sabmit(e: any) {
    if (validate()) {
      console.log(
        `name User: ${name} age User: ${age} pass User ${pass}  ress: `
      );
    }
    e.preventDefault();
  }

  return (
    <>
      <article className="container-registration">
        <h2 className="title-registration">Registration</h2>
        <div className="container-form-registration">
          <div className="container-form">
            <div className="div-form">
              <form className="form-registration" onSubmit={sabmit}>
                <p className="p-reg">See your Name:</p>
                <input
                  type="text"
                  id="input-name"
                  value={name}
                  onChange={inputName}
                />
                <p className="valid-p">{errors.name}</p>
                <p className="p-reg">Do you see your age:</p>
                <input
                  type="text"
                  id="input-age"
                  value={age}
                  onChange={inputAge}
                />
                <p className="valid-p">{errors.age}</p>
                <p className="p-reg">Do you see your password:</p>
                <input
                  type="text"
                  id="input-pass"
                  value={pass}
                  onChange={inputPass}
                />
                <p className="valid-p">{errors.pass}</p>
                <br />
                <button className="button-submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
