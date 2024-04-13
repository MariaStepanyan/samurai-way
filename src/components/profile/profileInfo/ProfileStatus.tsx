import React, { ChangeEvent } from 'react'

type propsType = {
  status: string
  updateProfileStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<propsType> {
  state = {
    editMode: false,
    status: this.props.status,
  }
  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateProfileStatus(this.state.status)
  }
  changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }
  componentDidUpdate(
    prevProps: Readonly<propsType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (prevProps.status != this.props.status) {
      this.setState({ status: this.props.status })
    }
  }
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || '----'}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.deActivateEditMode}
              value={this.state.status}
              onChange={this.changeStatusHandler}
              autoFocus
            />
          </div>
        )}
      </>
    )
  }
}
