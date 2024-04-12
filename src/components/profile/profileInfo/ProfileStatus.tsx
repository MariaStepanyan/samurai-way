import React from 'react'

type propsType = {
  status: string
}

export class ProfileStatus extends React.Component<propsType> {
  state = {
    editMode: false,
  }
  activateEditMode() {
    this.setState({
      editMode: true,
    })
  }
  deActivateEditMode() {
    this.setState({
      editMode: false,
    })
  }
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.deActivateEditMode.bind(this)}
              value={this.props.status}
              autoFocus
            />
          </div>
        )}
      </>
    )
  }
}
