import D from './D'

export default function m({ movie }) {
  return (
    <div>
        {movie.title}
        {movie.dates.map(dateObject => <D dateObject={dateObject} />)}
    </div>
  )
}
