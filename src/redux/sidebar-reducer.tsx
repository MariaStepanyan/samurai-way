import { ActionType } from './state'

export type friendstype = {
  name: string
  id: number
}
export type SidebarType = {
  friends: friendstype[]
}

let initialState: SidebarType = {
  friends: [
    { name: 'Sasha', id: 1 },
    { name: 'Sveta', id: 2 },
    { name: 'Valera', id: 3 },
  ],
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionType): SidebarType => {
  switch (action.type) {
    default:
      return state
  }
}
