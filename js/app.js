class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            
            <input type="text" placeholder="Your Name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/>
          <br/>
          <label>
            
            <textarea placeholder="Comment" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/>
          <input class="button" type="submit" value="Comment" />
         
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );