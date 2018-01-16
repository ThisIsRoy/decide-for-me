const app = {
  title: 'Indecision',
  subtitle: 'Let a computer make your important life decisions',
  options: []
}; 

const onFormSubmit = (e) => {
  e.preventDefault();

  //name of input tag is "option"
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value='';
    renderPage();
  }
};

const makeChoice = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert('We chose ' + option);
};

const removeOptions = () => {
  app.options = [];
  renderPage();
};

const renderPage = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={makeChoice}>Choose for me!</button>
      <button onClick={removeOptions}>Remove Options</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
}

renderPage();
