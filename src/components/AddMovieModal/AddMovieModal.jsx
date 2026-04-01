import { useState } from "react";
import "./AddMovieModal.css";

const initialFormData = {
  title: "",
  genre: "",
  year: "",
  rating: "",
  actors: ""
};

export default function AddMovieModal({ isOpen, onClose, onAddMovie }) {
  const [formData, setFormData] = useState(initialFormData);

  if (!isOpen) return null;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newMovie = {
      title: formData.title.trim(),
      genre: formData.genre.trim(),
      year: Number(formData.year),
      rating: Number(formData.rating),
      actors: formData.actors
        .split(",")
        .map((actor) => actor.trim())
        .filter((actor) => actor != ""),
      poster: "",
    };

    await onAddMovie(newMovie);
    setFormData(initialFormData);
  }

  function handleClose() {
    setFormData(initialFormData);
    onClose();
  }

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title">Добавить новый фильм</h3>
          <button className="modal__close" type="button" onClick={handleClose}>
            ×
          </button>
        </div>

        <form className="movie-form" onSubmit={handleSubmit}>
          <label className="movie-form__label">
            Название *
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              placeholder="Введите название фильма"
              required
            />
          </label>

          <label className="movie-form__label">
            Жанр *
            <input
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              type="text"
              placeholder="Например: Драма, Боевик, Комедия"
              required
            />
          </label>

          <div className="movie-form__row">
            <label className="movie-form__label">
              Год выхода *
              <input
                name="year"
                value={formData.year}
                onChange={handleChange}
                type="number"
                placeholder="2024"
                required
              />
            </label>

            <label className="movie-form__label">
              Рейтинг *
              <input
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                type="number"
                step="0.1"
                min="0"
                max="10"
                placeholder="8.5"
                required
              />
            </label>
          </div>

          <label className="movie-form__label">
            Главные актёры
            <input
              name="actors"
              value={formData.actors}
              onChange={handleChange}
              type="text"
              placeholder="Разделите актёров запятыми: Актёр 1, Актёр 2, Актёр 3"
            />
            <span className="movie-form__hint">
              Введите имена актёров через запятую
            </span>
          </label>

          <div className="movie-form__actions">
            <button
              type="button"
              className="button button--secondary"
              onClick={handleClose}
            >
              Отмена
            </button>
            <button type="submit" className="button button--primary">
              Добавить фильм
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}