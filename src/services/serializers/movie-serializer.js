import commentSerializer from './comment-serializer'
import serializer from './serializer'
export default async function(movie, deep = true) {
  if (deep) {
    const comments = await serializer(await movie.comments(), (comment) => commentSerializer(comment, false))
    return {
      id: movie.id,
      title: movie.title,
      year: movie.year,
      genre: movie.genre,
      country: movie.country,
      plot: movie.plot,
      comments: comments || []
    }
  }

  return {
    title: movie.title,
    year: movie.year
  }
}

