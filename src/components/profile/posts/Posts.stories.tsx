import { store } from '../../../redux/state'
import { MyPosts } from './MyPosts'

export default {
  component: MyPosts,
}

export const Posts = () => {
  return <MyPosts store={store} state={store.getState()} />
}
