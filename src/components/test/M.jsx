import D from './D'

export default function M({ movie }) {
  return (
    <div>
        {movie.title}
        {movie.dates.map(dateObject => <D dateObject={dateObject} />)}
    </div>
  )
}
