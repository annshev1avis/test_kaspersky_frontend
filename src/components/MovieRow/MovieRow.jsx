import './MovieRow.css';

export default function MovieRow({ movie, isSelected, onToggleSelection }) {
  const actorsText = movie.actors ? movie.actors.join(', ') : "";

  return (
    <tr className='movie-row'>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelection(movie.id)}
        />
      </td>
      <td>
        {
          movie.poster ?
          <img className='movie-row__poster' src={movie.poster}/> :
          <div className='movie-row__poster-placeholder'></div>
        }
      </td>
      <td className='movie-row__title'>{ movie.title }</td>
      <td className='movie-row__secondary-info'>{ movie.genre }</td>
      <td className='movie-row__secondary-info'>{ movie.year }</td>
      <td>
        <div className='movie-row__rating'>{ movie.rating }</div>
      </td>
      <td className='movie-row__secondary-info'>{ actorsText }</td>
    </tr>
  );
}