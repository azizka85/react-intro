function Car(props) {
  const classes = ['card'];

  if(props.car.marked) {
    classes.push('marked');
  }

  return (
    <div className={classes.join(' ')} onClick={props.onMark}>
      <div className="card-img">
        <img 
          src={props.car.img} 
          alt={props.car.name}
        />
      </div>
      <h3>{props.car.name}</h3>
      <p>{props.car.price}</p>
    </div>    
  );
}

class App extends React.Component {
  state = {
    appTitle: 'Cars application',
    cars: [{
      marked: false,
      name: 'BMW M2 Coupe',
      price: '20000 $',
      img: 'https://images.drive.ru/i/0/5dc25470ec05c44c75000023.jpg'
    }, {
      marked: false,
      name: 'Audi TT',
      price: '15000 $',
      img: 'http://cdn.motorpage.ru/Photos/800/1105D.jpg'
    }, {
      marked: false,
      name: 'Rolls Royce',
      price: '50000 $',
      img: 'https://motor.ru/thumb/2724x0/filters:quality(75):no_upscale()/imgs/2019/10/22/12/3620885/725b4260710b9068891094a0fc3c73568cb68c07.jpg'
    }, {
      marked: false,
      name: 'Mercedes AMG Coupe',
      price: '18000 $',
      img: 'https://img-c.drive.ru/models.large.main.images/0000/000/000/001/12f/48d5438e1b367fe8-main.jpg'
    }],
    visible: true
  };

  handleMarked(name) {
    const cars = this.state.cars.concat();
    const car = cars.find(car => car.name === name);
    
    if(car) {
      car.marked = !car.marked;
    }

    this.setState({cars});
  }

  handleToggle() {
    this.setState({visible: !this.state.visible});
  }

  handleTitleChanged(value) {
    this.setState({appTitle: value});
  }

  renderCards() {
    if(!this.state.visible) {
      return null;
    }

    return this.state.cars.map(car => {
      return (
        <Car 
          car={car} 
          onMark={this.handleMarked.bind(this, car.name)}
          key={car.name + Math.random()} 
        />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <h1>{this.state.appTitle}</h1>
        <button onClick={() => this.handleToggle()}>Toggle</button>
        <input 
          type="text"
          placeholder="Change title"
          style={{marginLeft: 20}}
          onInput={event => this.handleTitleChanged(event.target.value)}
        />
        <hr />
        <div className="list">          
          { this.renderCards() }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
