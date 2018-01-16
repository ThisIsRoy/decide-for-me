import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal';

export default class DecideApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Write something first!';
    } else if (this.state.options.indexOf(option) !== -1) {
      return 'This already exists!';
    } 

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (option) => {
    const optionIndex = this.state.options.indexOf(option);
    this.setState((prevState) => ({
      options: prevState.options.filter(eachOption => eachOption !== option)
    }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    //setTimeout(() => { this.setState(() => ({ selectedOption: this.state.options[randomNum] }));}, 3000);
    this.setState(() => ({selectedOption: this.state.options[randomNum]}));
  }

  handleCloseModal = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log("REACT COMPONENT DELETED!");
  }

  render() {
    const subtitle = 'Let a computer make your decisions';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
            handlePick={this.handlePick} 
            hasOptions={this.state.options.length > 1} 
          />
          <div className="widget">
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              options={this.state.options}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
         
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
      </div>
    );
  };
}
