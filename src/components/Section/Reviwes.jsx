import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Reviwes = ({ t }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Викликаємо useEffect для завантаження відгуків після завантаження компоненту
  useEffect(() => {
    // Отримуємо відгуки з локального сховища (можна замінити на вибірку з сервера)
    const savedFeedbacks = localStorage.getItem("feedbacks");
    if (savedFeedbacks) {
      setFeedbacks(JSON.parse(savedFeedbacks));
    }
  }, []);

  // Функція для додавання нового відгуку
  const addFeedback = (name, newFeedback) => {
    const updatedFeedbacks = [...feedbacks, { name, text: newFeedback }];
    setFeedbacks(updatedFeedbacks);
    // Зберігаємо відгуки в локальному сховищі
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
  };

  return (
    <div className="reviwes">
      <Link to="/">{t("back.toMain")}</Link>
      <div className="reviwesForm">
        <h2>{t("reviwes.title")}</h2>
        {/* Відображаємо всі наявні відгуки */}
        <ul>
          {feedbacks.map((feedback, index) => (
            <li key={index}>
              <strong>{feedback.name || t("reviwes.text")}:</strong>{" "}
              <p>{feedback.text}</p>
            </li>
          ))}
        </ul>
        {/* Форма для додавання нового відгуку */}
        <form
          className="reviwesFormMain"
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.elements.name.value || t("reviwes.text");
            const newFeedback = e.target.elements.feedback.value;
            addFeedback(name, newFeedback);
            e.target.reset();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder={t("reviwes.name")}
            required
          />
          <input
            type="text"
            name="feedback"
            placeholder={t("reviwes.reviwe")}
            required
          />
          <button type="submit">{t("reviwes.button")}</button>
        </form>
      </div>
      <div className="revswesImg">
        <img src="./img/rev/1.jpg" alt="" />
        <img src="./img/rev/2.jpg" alt="" />
        <img src="./img/rev/3.jpg" alt="" />
        <img src="./img/rev/4.jpg" alt="" />
        <img src="./img/rev/5.jpg" alt="" />
      </div>
    </div>
  );
};
