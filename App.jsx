/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1, 
    name: 'Jack', 
    phone: 88885555,
    bookingTime: new Date(),
    origin: 'Singapore',
    destination: 'Thailand',
    seatNumber: 1,
  },
  {
    id: 2, 
    name: 'Rose', 
    phone: 88884444,
    bookingTime: new Date(),
    origin: 'Singapore',
    destination: 'Thailand',
    seatNumber: 2,
  },
];


function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  const { traveller } = props;

  return (
    <tr>
	  {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
      <td>{traveller.id}</td>
      <td>{traveller.name}</td>
      <td>{traveller.phone}</td>
      <td>{traveller.bookingTime.toString()}</td>
      <td>{traveller.origin}</td>
      <td>{traveller.destination}</td>
      <td>{traveller.seatNumber}</td>
    </tr>
  );
}


function Display(props) {
  
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  const { travellers } = props;

  const travellerRows = travellers.map(traveller => (
    <TravellerRow key={traveller.id} traveller={traveller} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
	  {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Booking Time</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Seat Number</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
        {travellerRows}
      </tbody>
    </table>
  );
}


function Seats(totalSeats, travellers) {
  var seats = [];
  for (var i = 1; i <= totalSeats; i++) {
    let seatColor = travellers.some(traveller => traveller.seatNumber === i) ? '#008000' : '#FFA500';
    let seatsStyle = {
      width: '30px',
      height: '30px',
      margin: '5px',
      border: '1px solid #000000',
      backgroundColor: seatColor,
    };
    seats.push(<div key={i} style={seatsStyle}></div>);
  }
  return seats;
}


class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    var form = document.forms.addTraveller;
    const newTraveller = {
      name: form.travellername.value,
      phone: form.travellerphone.value,
      bookingTime: new Date(),
    }; 
    this.props.addfunction(newTraveller);
    form.reset();
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <input type="tel" name="travellerphone" pattern="[0-9]*" placeholder="Phone"/>
        <button>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    var form = document.forms.deleteTraveller;
    this.props.deletefunction(form.travellerid.value);
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
	<input type="number" name="travellerid" placeholder="ID" />
        <button>Delete</button>
      </form>
    );
  }
}


class Homepage extends React.Component {
	constructor() {
	super();
	}

	render(){
    const { totalSeats, travellers } = this.props;
    // const bookedSeats = travellers.length;
    const freeSeats = totalSeats - travellers.length;

	return (
	<div>
		{/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
    <h2>Welcome to Ticket To Ride</h2>
    <div>
      <h3>Free Seats: { freeSeats }</h3>
    </div>
    <div className="seats">
          { Seats(totalSeats, travellers) }
    </div>       
	</div>);
	}
}


class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1, totalSeats: 10};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
    this.setSelector = this.setSelector.bind(this);
  }

  setSelector(value)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({ selector: value });
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravellers });
    }, 500);
  }

  bookTraveller(passenger) {
	  /*Q4. Write code to add a passenger to the traveller state variable.*/

    if (passenger.name.trim() === "" || passenger.phone.trim() === "") {
      alert("Please enter complete information!");
      return;
    }

    this.setState(prevState => {
      if(prevState.travellers.length >= 10){
        alert("No more passengers can be added!");
        return;
      }
      const maxId = prevState.travellers.length > 0 ? Math.max(...prevState.travellers.map(t => t.id)) : 0;
      const newId = maxId + 1;

      let availableSeatNumber = 1;
      const occupiedSeatNumbers = new Set(prevState.travellers.map(traveller => traveller.seatNumber));
      while (occupiedSeatNumbers.has(availableSeatNumber) && availableSeatNumber <= 10) {
        availableSeatNumber++;
      }

      const newTraveller = { ...passenger, id: newId, origin: 'Singapore', destination: 'Thailand', seatNumber: availableSeatNumber };
    
      return {
        travellers: [...prevState.travellers, newTraveller],
      };
    });
  }
  

  deleteTraveller(passenger) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
    var newlist = [];
    const passengerId = Number(passenger);

    if (passenger.trim() === "") {
      alert("Please enter a traveller ID");
      return;
    }

    if (this.state.travellers.length === 0) {
      alert("No more passengers can be deleted!");
      return;
    }

    if (!this.state.travellers.some(traveller => traveller.id === passengerId)) {
      alert("Passenger with ID " + passenger + " not found!");
      return;
    }

    this.state.travellers.forEach(element => {
      if(element.id != passengerId){ newlist.push(element) }
    });
  
    this.setState({ travellers: newlist });
  }


  render() {
    const { selector, totalSeats, travellers } = this.state;

    return (
      <div>
        <h1>Ticket To Ride</h1>

        <div>
	        {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
          <nav>
            <button onClick={() => this.setSelector(1)}>Home</button>
            <button onClick={() => this.setSelector(2)}>Display Travellers</button>
            <button onClick={() => this.setSelector(3)}>Add Traveller</button>
            <button onClick={() => this.setSelector(4)}>Delete Traveller</button>
          </nav>
        </div>
        
        <div>
          {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
		      {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
		      {/*Q3. Code to call component that Displays Travellers.*/}
		      {/*Q4. Code to call the component that adds a traveller.*/}
		      {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
          {selector === 1 && <Homepage totalSeats={totalSeats} travellers={travellers}/>}
          {selector === 2 && <Display travellers={this.state.travellers} />}
          {selector === 3 && <Add addfunction={this.bookTraveller} />}
          {selector === 4 && <Delete deletefunction={this.deleteTraveller} />}
	      </div>
      
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
