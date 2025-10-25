import "./registration.css";
import { useState } from "react";

export default function Registration() {
  const [result, setResult] = useState<{
    name?: string;
    age?: string;
    pass?: string;
  }>({ name: "", age: "", pass: "" });

  const [errors, setErrors] = useState<{
    name?: string;
    age?: string;
    pass?: string;
  }>({});

  function input(e: any) {
    const { name, value } = e.target;
    setResult((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors: { name?: string; age?: string; pass?: string } = {};

    const valName = result.name;
    const valAge = result.age;
    const valPass = result.pass;

    if (!valName?.trim()) {
      newErrors.name = "Требуется указать имя";
    }
    if (!valAge?.trim()) {
      newErrors.age = "Требуется возраст";
    } else if (
      !/^\d+$/.test(valAge) ||
      Number(valAge) <= 0 ||
      Number(valAge) <= 17 ||
      Number(valAge) > 100
    ) {
      newErrors.age = `не коректный возраст ${valAge}`;
    }
    if (!valPass?.trim()) {
      newErrors.pass = "Требуется ввести пароль";
    } else if (valPass.length < 6) {
      newErrors.pass = "Пароль должен содержать не менее 6 символов";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function sabmit(e: any) {
    if (!validate()) return;

    if (validate()) {
      console.log(
        `name User: ${result.name} age User: ${result.age} pass User ${result.pass}  ress: `
      );
    }
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      });
      const data = await response.json();
      console.log("Ответ сервера:", data);
    } catch (err) {
      console.error("Ошибка при отправке:", err);
    }
  }

  async function getUsers() {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    console.log(data);
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
                  name="name"
                  type="text"
                  id="input-name"
                  value={result.name}
                  onChange={input}
                />
                <p className="valid-p">{errors.name}</p>
                <p className="p-reg">Do you see your age:</p>
                <input
                  name="age"
                  type="text"
                  id="input-age"
                  value={result.age}
                  onChange={input}
                />
                <p className="valid-p">{errors.age}</p>
                <p className="p-reg">Do you see your password:</p>
                <input
                  name="pass"
                  type="text"
                  id="input-pass"
                  value={result.pass}
                  onChange={input}
                />
                <p className="valid-p">{errors.pass}</p>
                <br />
                <button className="button-submit" type="submit">
                  Submit
                </button>
              </form>
              <button onClick={getUsers}></button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
