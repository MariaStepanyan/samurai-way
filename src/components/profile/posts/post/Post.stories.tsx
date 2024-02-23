import { Post } from './Post'

export default {
  component: Post,
}

export const MyPost = () => {
  return <Post text={'some text'} like={5} />
}
