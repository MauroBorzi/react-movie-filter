import { useState, useEffect } from "react"

const filmsList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

const FilmsList = () => {
  const [films, setFilms] = useState(filmsList)
  const [newFilms, setNewFilms] = useState("")
  const [search, setSearch] = useState("")
  const [searchs, setSearchs] = useState("")
  const [filteredFilms, setFilteredFilms] = useState(films)

  useEffect(() => {
    const filteredFilm = films.filter(film => {
      return film.genre.toLowerCase().includes(search.toLowerCase())
    })

    setFilteredFilms(filteredFilm)

  }, [search])

  useEffect(() => {
    const filteredFilm = films.filter(film => {
      return film.title.toLowerCase().includes(searchs.toLowerCase())
    })

    setFilteredFilms(filteredFilm)

  }, [searchs])

  const addFilm = e => {
    e.preventDefault()

    let obj = {
      title: newFilms,
      genre: 'Fantascienza'
    }
    setFilms([...films, obj])
    setFilteredFilms([...filteredFilms, obj])
    setNewFilms("")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-3">
          <label className="form-label"><strong>Cerca Film per GENERE</strong></label>
          <select className="form-select" aria-label="Select films" value={search} onChange={e => setSearch(e.target.value)}>
            <option value="">Seleziona categoria film</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </div>
        <div className="col-6 mt-3">
          <label className="form-label"><strong>Cerca Film per TITOLO</strong></label>
          <input
            type="text"
            className="form-control"
            placeholder="Inserire titolo"
            value={searchs}
            onChange={e => setSearchs(e.target.value)}
          />
        </div>
        <div className="col-12 mt-5">
          <ol className="list-group list-group-numbered">
            {filteredFilms.map((film, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {film.title}
                </li>
              )
            })}
          </ol>
        </div>
        <div className="col-12 mt-5">
          <form onSubmit={addFilm}>
            <label className="form-label"><strong>Inserisci NUOVO film</strong></label>
            <input
              type="text"
              className="form-control"
              placeholder="Inserisci nuovo film"
              value={newFilms}
              onChange={e => setNewFilms(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default FilmsList
