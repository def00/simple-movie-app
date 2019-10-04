import createComment from './create-comment'
export default function (data) {
  return {
    comments: async () => {
      return data.commentsData
    },
    ...data
  }
}
