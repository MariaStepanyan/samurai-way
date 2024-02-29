import { store } from '../../../redux/state'
import { MyPosts } from './MyPosts'

export default {
  component: MyPosts,
}

export const Posts = () => {
  const state = store.getState()
  const dispatch = store.dispatch
  return <MyPosts state={state} dispatch={dispatch} />
}
