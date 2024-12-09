import React, { useState, useEffect } from "react";
import "./dropStyle.css";

export const SearchDrop = ({ t, cat1 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toUpperCase());
  };

  const handleSearch = () => {
    if (searchTerm === "") return;
    setShowModal(true);
    console.log("Searching for:", searchTerm);

    const results = cat1.filter((item) => item.sku.includes(searchTerm));
    setSearchResults(results);
    console.log("Search results:", results);

    if (!searchHistory.includes(searchTerm)) {
      setSearchHistory((prevHistory) => [...prevHistory, searchTerm]);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="searchDrop">
      <div className="search">
        <input
          type="text"
          placeholder={t("dropMenu.sec7")}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <img
            loading="lazy"
            src="/img/headerIcon/search.png"
            alt="search icon"
          />
        </button>
        <datalist id="search-parameters">
          <option value="Якщо ви знаєте артикул товара введіть його тут мінімум 3-ри символи" />
        </datalist>
      </div>

      {showModal && (
        <div className="modal-search">
          <h1>Результати пошуку</h1>
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div className="modal-info-search-conteiner" key={item.id}>
                <div className="modal-info-search">
                  <button className="closed" onClick={handleCloseModal}>
                    &times;
                  </button>
                  {item.sku && (
                    <h2>
                      Арт. продукту:
                      <br /> {item.sku}
                    </h2>
                  )}
                  {item.gold_assay && (
                    <p>
                      Проба :<br /> {item.gold_assay}
                    </p>
                  )}
                  {item.gold_color && (
                    <p>
                      Колір :<br /> {item.gold_color}
                    </p>
                  )}
                  {item.size && (
                    <p>
                      Розмір :<br /> {item.size}
                    </p>
                  )}
                  {item.stone_characteristics && (
                    <p>
                      Характеристики каміння :<br />{" "}
                      {item.stone_characteristics}
                    </p>
                  )}
                  {item.weight && (
                    <p>
                      Вага виробу :<br /> {item.weight}
                    </p>
                  )}
                </div>
                <div className="modal-img">
                  {item.media_files &&
                    item.media_files.length > 0 &&
                    item.media_files.map((mediaItem) => (
                      <img key={mediaItem.id} src={mediaItem.photo} alt="" />
                    ))}
                </div>
                <div className="modal-video">
                  {item.media_files &&
                    item.media_files.length > 0 &&
                    item.media_files.map(
                      (mediaItem) =>
                        mediaItem.video && (
                          <video
                            key={mediaItem.id}
                            src={mediaItem.video}
                            autoPlay
                            controls
                            muted
                          />
                        )
                    )}
                </div>
              </div>
            ))
          ) : (
            <p>Нічого не знайдено</p>
          )}
        </div>
      )}
    </div>
  );
};
