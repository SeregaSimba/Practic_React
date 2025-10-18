import { useState } from "react";
import "./tudu.css";

export default function TuDu() {
  const [valueTuDu, setValueTuDu] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function getValTuDu(e: any) {
    const res = e.target.value;
    setValueTuDu((pre) => res);
  }

  function submitTuDu(e: any) {
    e.preventDefault();
    if (valueTuDu.trim() === "") return;
    setTasks((pre) => [...pre, valueTuDu]);
    setValueTuDu("");
  }

  return (
    <>
      <article className="global-container-tuDu">
        <h1 className="title-tuDu">Tu-Du List</h1>
        <section className="container-tuDu">
          <article className="container-new-task">
            <input
              value={valueTuDu}
              type="text"
              id="input-tuDu"
              placeholder="введите задачу"
              onChange={getValTuDu}
            />
            <button className="button-tuDu-submit" onClick={submitTuDu}>
              submit
            </button>
          </article>
          <article className="container-ready-tuDu">
            <ul className="ul-container-tuDu">
              {tasks.map((tas, id) => (
                <li key={id} className={"li-tuDu"}>
                  <input type="checkbox" />
                  <p>{tas}</p>
                  <button>del</button>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </article>
    </>
  );
}
