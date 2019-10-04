import movieSerializer from './movie-serializer'

export default async function(comment, deep = true) {
  if (deep && (typeof comment.movie !== 'function' || !comment.id)) {
    throw new Error('Wrong input data for serializer')
  }
  if (deep) {
    const movie = await movieSerializer(await comment.movie(), false)
    return {
      id: comment.id,
      author: comment.name,
      comment: comment.comment,
      movie: movie || null
    }
  }
  return {
    author: comment.name,
    comment: comment.comment
  }
}

