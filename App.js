"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
var initialTravellers = [{
  id: 1,
  name: 'Jack',
  phone: 88885555,
  bookingTime: new Date(),
  origin: 'Singapore',
  destination: 'Thailand',
  seatNumber: 1
}, {
  id: 2,
  name: 'Rose',
  phone: 88884444,
  bookingTime: new Date(),
  origin: 'Singapore',
  destination: 'Thailand',
  seatNumber: 2
}];
function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  var traveller = props.traveller;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, traveller.id), /*#__PURE__*/React.createElement("td", null, traveller.name), /*#__PURE__*/React.createElement("td", null, traveller.phone), /*#__PURE__*/React.createElement("td", null, traveller.bookingTime.toString()), /*#__PURE__*/React.createElement("td", null, traveller.origin), /*#__PURE__*/React.createElement("td", null, traveller.destination), /*#__PURE__*/React.createElement("td", null, traveller.seatNumber));
}
function Display(props) {
  /*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  var travellers = props.travellers;
  var travellerRows = travellers.map(function (traveller) {
    return /*#__PURE__*/React.createElement(TravellerRow, {
      key: traveller.id,
      traveller: traveller
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone"), /*#__PURE__*/React.createElement("th", null, "Booking Time"), /*#__PURE__*/React.createElement("th", null, "Origin"), /*#__PURE__*/React.createElement("th", null, "Destination"), /*#__PURE__*/React.createElement("th", null, "Seat Number"))), /*#__PURE__*/React.createElement("tbody", null, travellerRows));
}
function Seats(totalSeats, travellers) {
  var seats = [];
  for (var i = 1; i <= totalSeats; i++) {
    var seatColor = travellers.some(function (traveller) {
      return traveller.seatNumber === i;
    }) ? '#008000' : '#FFA500';
    var seatsStyle = {
      width: '30px',
      height: '30px',
      margin: '5px',
      border: '1px solid #000000',
      backgroundColor: seatColor
    };
    seats.push( /*#__PURE__*/React.createElement("div", {
      key: i,
      style: seatsStyle
    }));
  }
  return seats;
}
var Add = /*#__PURE__*/function (_React$Component) {
  _inherits(Add, _React$Component);
  function Add() {
    var _this;
    _classCallCheck(this, Add);
    _this = _callSuper(this, Add);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Add, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
      var form = document.forms.addTraveller;
      var newTraveller = {
        name: form.travellername.value,
        phone: form.travellerphone.value,
        bookingTime: new Date()
      };
      this.props.addfunction(newTraveller);
      form.reset();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "addTraveller",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "travellername",
        placeholder: "Name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "tel",
        name: "travellerphone",
        pattern: "[0-9]*",
        placeholder: "Phone"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);
  return Add;
}(React.Component);
var Delete = /*#__PURE__*/function (_React$Component2) {
  _inherits(Delete, _React$Component2);
  function Delete() {
    var _this2;
    _classCallCheck(this, Delete);
    _this2 = _callSuper(this, Delete);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }
  _createClass(Delete, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
      var form = document.forms.deleteTraveller;
      this.props.deletefunction(form.travellerid.value);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "deleteTraveller",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "travellerid",
        placeholder: "ID"
      }), /*#__PURE__*/React.createElement("button", null, "Delete"));
    }
  }]);
  return Delete;
}(React.Component);
var Homepage = /*#__PURE__*/function (_React$Component3) {
  _inherits(Homepage, _React$Component3);
  function Homepage() {
    _classCallCheck(this, Homepage);
    return _callSuper(this, Homepage);
  }
  _createClass(Homepage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        totalSeats = _this$props.totalSeats,
        travellers = _this$props.travellers;
      // const bookedSeats = travellers.length;
      var freeSeats = totalSeats - travellers.length;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to Ticket To Ride"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Free Seats: ", freeSeats)), /*#__PURE__*/React.createElement("div", {
        className: "seats"
      }, Seats(totalSeats, travellers)));
    }
  }]);
  return Homepage;
}(React.Component);
var TicketToRide = /*#__PURE__*/function (_React$Component4) {
  _inherits(TicketToRide, _React$Component4);
  function TicketToRide() {
    var _this3;
    _classCallCheck(this, TicketToRide);
    _this3 = _callSuper(this, TicketToRide);
    _this3.state = {
      travellers: [],
      selector: 1,
      totalSeats: 10
    };
    _this3.bookTraveller = _this3.bookTraveller.bind(_assertThisInitialized(_this3));
    _this3.deleteTraveller = _this3.deleteTraveller.bind(_assertThisInitialized(_this3));
    _this3.setSelector = _this3.setSelector.bind(_assertThisInitialized(_this3));
    return _this3;
  }
  _createClass(TicketToRide, [{
    key: "setSelector",
    value: function setSelector(value) {
      /*Q2. Function to set the value of component selector variable based on user's button click.*/
      this.setState({
        selector: value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this4 = this;
      setTimeout(function () {
        _this4.setState({
          travellers: initialTravellers
        });
      }, 500);
    }
  }, {
    key: "bookTraveller",
    value: function bookTraveller(passenger) {
      /*Q4. Write code to add a passenger to the traveller state variable.*/

      if (passenger.name.trim() === "" || passenger.phone.trim() === "") {
        alert("Please enter complete information!");
        return;
      }
      this.setState(function (prevState) {
        if (prevState.travellers.length >= 10) {
          alert("No more passengers can be added!");
          return;
        }
        var maxId = prevState.travellers.length > 0 ? Math.max.apply(Math, _toConsumableArray(prevState.travellers.map(function (t) {
          return t.id;
        }))) : 0;
        var newId = maxId + 1;
        var availableSeatNumber = 1;
        var occupiedSeatNumbers = new Set(prevState.travellers.map(function (traveller) {
          return traveller.seatNumber;
        }));
        while (occupiedSeatNumbers.has(availableSeatNumber) && availableSeatNumber <= 10) {
          availableSeatNumber++;
        }
        var newTraveller = _objectSpread(_objectSpread({}, passenger), {}, {
          id: newId,
          origin: 'Singapore',
          destination: 'Thailand',
          seatNumber: availableSeatNumber
        });
        return {
          travellers: [].concat(_toConsumableArray(prevState.travellers), [newTraveller])
        };
      });
    }
  }, {
    key: "deleteTraveller",
    value: function deleteTraveller(passenger) {
      /*Q5. Write code to delete a passenger from the traveller state variable.*/
      var newlist = [];
      var passengerId = Number(passenger);
      if (passenger.trim() === "") {
        alert("Please enter a traveller ID");
        return;
      }
      if (this.state.travellers.length === 0) {
        alert("No more passengers can be deleted!");
        return;
      }
      if (!this.state.travellers.some(function (traveller) {
        return traveller.id === passengerId;
      })) {
        alert("Passenger with ID " + passenger + " not found!");
        return;
      }
      this.state.travellers.forEach(function (element) {
        if (element.id != passengerId) {
          newlist.push(element);
        }
      });
      this.setState({
        travellers: newlist
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _this$state = this.state,
        selector = _this$state.selector,
        totalSeats = _this$state.totalSeats,
        travellers = _this$state.travellers;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Ticket To Ride"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this5.setSelector(1);
        }
      }, "Home"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this5.setSelector(2);
        }
      }, "Display Travellers"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this5.setSelector(3);
        }
      }, "Add Traveller"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this5.setSelector(4);
        }
      }, "Delete Traveller"))), /*#__PURE__*/React.createElement("div", null, selector === 1 && /*#__PURE__*/React.createElement(Homepage, {
        totalSeats: totalSeats,
        travellers: travellers
      }), selector === 2 && /*#__PURE__*/React.createElement(Display, {
        travellers: this.state.travellers
      }), selector === 3 && /*#__PURE__*/React.createElement(Add, {
        addfunction: this.bookTraveller
      }), selector === 4 && /*#__PURE__*/React.createElement(Delete, {
        deletefunction: this.deleteTraveller
      })));
    }
  }]);
  return TicketToRide;
}(React.Component);
var element = /*#__PURE__*/React.createElement(TicketToRide, null);
ReactDOM.render(element, document.getElementById('contents'));