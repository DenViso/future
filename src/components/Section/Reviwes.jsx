import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Reviwes = ({ t }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Викликаємо useEffect для завантаження відгуків після завантаження компоненту
  useEffect(() => {
    // Отримуємо відгуки з сервера
    fetch("https://api.future.in.ua/api/v1/reviews/")
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data);
        // Також зберігаємо відгуки в локальному сховищі як резервну копію
        localStorage.setItem("feedbacks", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching feedbacks:", error);
        // Якщо не вдалося отримати відгуки з сервера, завантажуємо з локального сховища
        const savedFeedbacks = localStorage.getItem("feedbacks");
        if (savedFeedbacks) {
          setFeedbacks(JSON.parse(savedFeedbacks));
        }
      });
  }, []);

  // Функція для додавання нового відгуку
  const addFeedback = (name, newFeedback) => {
    const newEntry = { name, text: newFeedback };
    const updatedFeedbacks = [...feedbacks, newEntry];

    // Відправляємо новий відгук на сервер
    fetch("https://api.future.in.ua/api/v1/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(updatedFeedbacks);
        // Зберігаємо відгуки в локальному сховищі
        localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
      })
      .catch((error) => {
        console.error("Error adding feedback:", error);
      });
  };

  return (
    <div className="reviwes">
      <Link className="back" to="/">
        {t("back.toMain")}
      </Link>
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
        <img loading="lazy" src="./img/rev/1.jpg" alt="" />
        <img loading="lazy" src="./img/rev/2.jpg" alt="" />
        <img loading="lazy" src="./img/rev/3.jpg" alt="" />
        <img loading="lazy" src="./img/rev/4.jpg" alt="" />
        <img loading="lazy" src="./img/rev/5.jpg" alt="" />
      </div>
    </div>
  );
};
