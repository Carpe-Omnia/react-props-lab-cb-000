import react from 'react';

export default class Spaceship extends React.Component {
  super(props) ;

  render() {
    return (
      <div>
        <p> {this.props.name} </p>
        <p> {this.props.speed} </p>
        <p> has rockets: {this.props.hasRockets} </p>
        <p> colors: {this.props.colors} </p>
      </div>
    )
  }
}
