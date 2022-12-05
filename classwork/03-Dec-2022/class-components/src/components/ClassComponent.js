import { Component } from "react";

class ClassComponent extends Component {
  state = {
    count: 0,
    tags: [{tag: "tag1"}, {tag: "tag2"}, {tag: "tag3"}] 
  }
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    console.log('THis is constructor');
  }
  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  componentDidMount() {
    console.log('This is Component Did Mount');
  }

  render() {
    console.log('This is Render');
    return(
      <div>
        <span className={`badge bg-${this.getBackground()} m-2`}>{this.getCount()}</span>
        <button className="btn btn-secondary m-2" onClick={this.handleClick}>Increment</button>
        <ul>
          {this.state.tags.map((tag) => <li>{tag.tag}</li>)}
        </ul>
      </div>
    );
  }
  getBackground() {
    const {count} = this.state;
    return count === 0 ? "warning" : 'primary';
  }
  getCount() {
    const {count} = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default ClassComponent;