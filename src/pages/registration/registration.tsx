import "./registration.css";
import { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [pass, setPass] = useState("");
  const arr: any[] = [];

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

  function sabmit(e: any) {
    console.log(`name User: ${name} age User: ${age} pass User ${pass}  ress:`);
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
                <p className="p-reg">Do you see your age:</p>
                <input
                  type="text"
                  id="input-age"
                  value={age}
                  onChange={inputAge}
                />
                <p className="p-reg">Do you see your password:</p>
                <input
                  type="text"
                  id="input-pass"
                  value={pass}
                  onChange={inputPass}
                />
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
