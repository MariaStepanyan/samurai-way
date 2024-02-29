import { ChangeEvent } from 'react'

type FormType = {
  btnName: string
  newValueText: string
  onValueChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onAddValue: () => void
}

export const Form = (props: FormType) => {
  return (
    <div>
      <div>
        <textarea
          value={props.newValueText}
          onChange={props.onValueChange}
        ></textarea>
      </div>
      <div>
        <button onClick={props.onAddValue}>{props.btnName}</button>
      </div>
    </div>
  )
}
