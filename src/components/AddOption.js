import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const inputOption = e.target.elements.inputOption.value.trim();
    const error = this.props.handleAddOption(inputOption);

    if (!error) {
      e.target.elements.inputOption.value = '';
    }

    this.setState(() => ({ error: error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="inputOption" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}