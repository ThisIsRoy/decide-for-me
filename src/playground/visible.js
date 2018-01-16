class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && <p>Here are the details</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const appRoot = document.getElementById('app');
// let buttonName = 'Show details';
// let show = false;

// const toggleVisible = () => {
//   show ? buttonName = 'Show details' : buttonName = 'Hide details';
//   show = !show;
//   renderPage();
// };

// const renderPage = () => {
//   const template = (
//     <div>
//       <h1>Visbility Toggle</h1>
//       <button onClick={toggleVisible}>{buttonName}</button>
//       {show && <p>Hello here are some details.</p>}
//     </div>
//   );
  
//   ReactDOM.render(template, appRoot);
// };

// renderPage();
