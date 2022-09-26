import useRoute from 'hooks/useRoute'
import userArticles from './userArticles.json'
import recruiterArticles from './recruiterArticles.json'

export default function useTextArticles() {
  const {
    params: { isRecruiter },
  } = useRoute()

  return isRecruiter ? recruiterArticles : userArticles
}
