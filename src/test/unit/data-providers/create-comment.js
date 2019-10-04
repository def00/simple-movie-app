import createMovie from './create-movie'
export default function (data) {
  return {
    movie: async () => {
      return createMovie(data.movieData || null)
    },
    ...data
  }
}
