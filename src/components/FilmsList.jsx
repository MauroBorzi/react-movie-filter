const filmsList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

const FilmsList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <ol className="list-group list-group-numbered">
            {filmsList.map((film, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {film.title}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default FilmsList
