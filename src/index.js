import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Axios from 'axios';




function getGreetingUser(props) {
   if (props) return <h1>Hello {formatName(props)} !</h1>
}


function formatName(props) {
   return props.firstName + ' ' + props.lastName;
}

class ParagraphH3 extends React.Component {
   render() { return <h3> Lorem ipsum dolor sit class.</h3> }
}

class Welcome extends React.Component {
   render() { return <h3> WELCOME {this.props.name}</h3> }
}


const presentational = <Welcome name="Sára" />;


const name = { firstName: 'George', lastName: 'Soros' }
const element = <h2>Lorem ipsum dolor sit amet.</h2>
const paragraph = <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet quibusdam rem quidem cum, harum facilis reiciendis nam natus, fugit provident eveniet error aspernatur libero, nihil consectetur ex veritatis fuga?</p>


function Avatar(props) {
   return <div> pic: {props.avatarPic}</div>
}

function UserInfo(props) {
   return (
      <div>
         {<Avatar avatarPic={props.avatar} />}
         <div>
            Author: {props.author}
         </div>
      </div>
   )
}

function Post(props) {
   return (
      <div>
         <div>
            Comment: {props.comment}
         </div>

         <div>
            Text: {props.text}
         </div>
      </div>
   )
}


function Comment(props) {
   return (
      <div style={{ border: '1px solid white', padding: '5px', margin: '5px' }} >

         <UserInfo author={props.authorName} avatar={props.avatar} />
         <Post comment={props.comment} text={props.text} />

      </div>
   )
}

class Clock extends React.Component {
   // constructor(props) {
   // super(props);
   state = { date: new Date() };
   // }

   componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
   }

   componentWillUnmount() {
      clearInterval(this.timerID);
   }

   tick() {
      this.setState({
         date: new Date()
      });
   }

   render() {
      return (
         <h3>
            {this.state.date.toLocaleTimeString()}
         </h3>
      )
   }
}


function ActionLink() {

   // function clickHandler(e) {
   //    e.preventDefault();
   //    alert('clicked')
   // }
   return (
      <div >
         {/* <a onClick={clickHandler} style={{ color: 'white' }} href="#"> Kattints rám</a> */}
      </div>
   )
}


class Toggle extends Component {
   constructor(props) {
      super(props);
      this.clickHandler_inner = this.clickHandler_inner.bind(this)
   }

   state = { isToggleOn: true }

   clickHandler_inner() {
      this.setState(state => ({ isToggleOn: !state.isToggleOn }))
   }

   clickHandler2 = () => {
      this.setState(state => ({ isToggleOn: !state.isToggleOn }))
   }

   clickHandler() {
      this.setState(state => ({ isToggleOn: !state.isToggleOn }))
   }

   clickHandler3 = () => {
      this.setState(state => ({ isToggleOn: !state.isToggleOn }))
   }


   render() {
      return (
         <div>

            {/* konstruktoron beluli kotes */}
            <button onClick={this.clickHandler_inner} style={{ padding: '10px', margin: '10px' }}>
               {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

            {/* nyilvanos osztalymezo szintaxis */}
            <button onClick={this.clickHandler2} style={{ padding: '10px', margin: '10px' }}>
               {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

            {/* arrow function */}
            {/* lehetséges teljesítményproblémák  */}
            <button onClick={(e) => this.clickHandler(e)} style={{ padding: '10px', margin: '10px' }}>
               {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

            <button onClick={this.clickHandler3.bind(this, 'param')} style={{ padding: '10px', margin: '10px' }}>
               {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

         </div>
      )
   }
}


function UserGreeting() {
   return <h1>Greeting again !</h1>
}

function GuestGreeting() {
   return <h1>Please log in first!</h1>
}


function Greeting(props) {
   const isLoggedIn = props.isLoggedIn;
   if (isLoggedIn) {
      return <UserGreeting />;
   }
   return <GuestGreeting />;
}


function LoginButton(props) {
   return (
      <button
         onClick={props.onClick}
         style={{ padding: '10px', margin: '10px' }}>
         Login
      </button>
   )
}


function LogoutButton(props) {
   return (
      <button
         onClick={props.onClick}
         style={{ padding: '10px', margin: '10px' }}>
         Logout
      </button>
   )
}



class LoginControl extends Component {
   state = { isLoggedIn: false };
   handleLoginClick = () => {
      this.setState({ isLoggedIn: true })
   }
   handleLogoutClick = () => {
      this.setState({ isLoggedIn: false })
   }
   render() {
      const isLoggedIn = this.state.isLoggedIn
      let button;
      if (!isLoggedIn) {
         button = <LoginButton onClick={this.handleLoginClick} />;
      } else {
         button = <LogoutButton onClick={this.handleLogoutClick} />;
      }
      return (
         <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
         </div>
      )
   }
}

function Mailbox(props) {
   const unreadMessages = props.unreadMessages;
   return (
      <div>
         {
            unreadMessages.length > 0 &&
            <h2>
               Önnek {unreadMessages.length} új üzenete van.
            </h2>
         }
      </div>
   )
}

function WarningBanner(props) {

   if (!props.showWarning) return null;

   return (
      <div>
         Warning
      </div>

   )
}

class Page extends Component {
   state = {
      showWarning: false
   }
   toggleClick = () => {
      this.setState({ showWarning: !this.state.showWarning })
   }

   render() {
      return (
         <div>
            <button onClick={this.toggleClick}>
               {this.state.showWarning ? 'Elrejtés' : 'Megjelenítés'}

            </button>
            <WarningBanner showWarning={this.state.showWarning} />
         </div>
      )
   }
}



function ListItems(props) {
   return (
      <li className='abc' >{props.item} - {props.id}</li>
   )
}

function List1(props) {
   let listItems = props.arr.map((item, index) => (
      <ListItems id={index} key={item.toString()} item={item} />
   ))
   return (
      <ul>
         {listItems}
      </ul>
   )
}
let arr = ['a', 'b', 'c', 'd']
let messages = ['react', 'Re: react'];




class NameForm extends Component {
   state = {
      value: 'kezdeti szoveg'
   }
   constructor(props) {
      super(props)
      this.onChangeSubmit = this.onChangeSubmit.bind(this);
   }
   onChangeText = (event) => {
      this.setState({ value: event.target.value.toUpperCase() })
      console.log(this)
   }
   onChangeSubmit(event) {
      event.preventDefault();
      let submitted = this.state.value;
      alert(submitted);
   }
   render() {
      return (
         <form onSubmit={this.onChangeSubmit} action="">
            <label htmlFor="">Name:
         <input type="text" name="name" id="" onChange={this.onChangeText} value={this.state.value} />
            </label>
            <input type="submit" value="Submit" />
         </form>
      )
   }
}


class SelectForm extends Component {

   constructor(props) {
      super(props)
      this.state = {
         value: 'pink'
      }

   }
   onChangeSelect = (event) => {
      this.setState({ value: event.target.value })
   }
   onChangeSubmit = (event) => {
      event.preventDefault();
      let submitted = this.state.value;
      alert(submitted);
   }
   render() {
      return (
         <form onSubmit={this.onChangeSubmit} action="">
            <label htmlFor="">Choose your favourite color
        <select
                  onChange={this.onChangeSelect}
                  value={this.state.value} >
                  <option value="black">black</option>
                  <option value="white">white</option>
                  <option value="blue">blue</option>
                  <option value="orange">orange</option>
                  <option value="pink">pink</option>
               </select>
            </label>
            <input type="submit" value="Submit" />
         </form>
      )
   }
}


class FileUpdate extends Component {
   render() {
      return (
         <div>
            <input type="file" name="" id="" />
         </div>
      )
   }
}


class Reservation extends Component {
   constructor(props) {
      super(props);
      this.state = { isGoing: true, numberOfGuests: 2 };
   }


   onChangeHandler = (event) => {
      const target = event.target;
      const value = target.name === 'isGoing' ? target.checked : target.value;
      console.log(value)
      const name = target.name;
      this.setState({
         [name]: value
      })
   }

   render() {
      return (
         <form action="">
            <label htmlFor="">IsGoing <input
               type="checkbox"
               name="isGoing"
               checked={this.state.isGoing}
               onChange={this.onChangeHandler} />
            </label>
            <br />
            <label htmlFor="">Number Of Guests <input
               type="number"
               name="numberOfGuests"
               value={this.state.numberOfGuests}
               onChange={this.onChangeHandler} />
            </label>
         </form>
      )
   }
}




const BoilingVerdict = (props) => {
   let status = props.temp > 100 ? 'forr' : 'nem forr'
   return (
      <div>
         A víz éppen {status}
      </div>
   )
}


const scaleArr = {
   c: 'Celsius',
   f: 'Fahrenheit'
}

const TemperatureInput = (props) => {

   function handleChange(e) {
      props.onTemperatureChange(e.target.value)
      console.log(props)
   }

   const temperature = props.value_;
   const scale = props.scale;

   return (
      <div>
         <label htmlFor="">Adja meg a homersekletet {scaleArr[scale]} értékben:
         <input
               value={temperature}
               onChange={handleChange}
               type="text"
               name=""
               id="" />
         </label>

      </div>
   )
}



class Calculator extends Component {

   state = {
      temperature: '',
      scale: 'c'
   }

   FahrenheitHandler = (temperature) => {
      this.setState({ temperature: temperature, scale: 'f' })
   }

   CelsiusHandler = (temperature) => {
      this.setState({ temperature: temperature, scale: 'c' })
   }

   render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? temperature * 4.3 : temperature;
      const fahrenheit = scale === 'c' ? temperature / 4.3 : temperature;

      return (
         <div>
            <TemperatureInput
               scale='c'
               value_={celsius}
               onTemperatureChange={this.CelsiusHandler} />

            <TemperatureInput
               scale='f'
               value_={fahrenheit}
               onTemperatureChange={this.FahrenheitHandler} />
            <BoilingVerdict temp={temperature} />
         </div>
      )
   }
}



function FancyBorder(props) {
   // console.log(props)
   return (
      <div>
         {props.children}
      </div>
   )
}


const SplitPane = (props) => {
   console.log(props)
   return (
      <div>
         {props.left}
         {props.right}
      </div>
   )
}


function WelcomeDialog() {
   return (
      <div>
         <FancyBorder>
            <h1>udvozoljuk</h1>
            <p>isten hozta Önt</p>
         </FancyBorder>
         <SplitPane
            left={<p>contacts.....</p>}
            right={<p>chat.....</p>}
         />
      </div>
   )
}

function Dialog(props) {

   return (
      <div>
         {props.message}
         {props.title}
         {props.children}
      </div>
   )
}

class SignUpDialog extends Component {
   state = {
      login: 'Peter'
   }
   textHandler = (event) => {
      this.setState({ login: event.target.value })
   }
   loginHandler = () => { alert(`Udvozoljuk kedves ${this.state.login}`) }

   render() {
      const login = this.state.login
      return (

         <Dialog message="message" title="title">

            <input
               type="text"
               name=""
               onChange={this.textHandler}
               value={login} />
            <input
               type="button"
               value="Login"
               onClick={this.loginHandler} />

         </Dialog>
      )
   }
}

const axios = Axios.create({
   baseURL: "https://react-http-cec91.firebaseio.com/"
})




function SearchBox(props) {
   return (
      <div
         style={{
            padding: '1rem',
            margin: '1rem',
            border: '1px solid white'
         }}>
         <label htmlFor="">Search item:
         <input type="text" onChange={props.searchhandler} />
         </label>
      </div>
   )
}

function ProductTable(props) {

   const filterText = props.filterText;
   const filteredDataRows = props.dataRows.filter(item => {
      return item.body.includes(filterText)
   });

   return (
      <div>
         A darabszam: {filteredDataRows.length}
         <ProductCategoryRow />
         <ProductRow dataRows={filteredDataRows} />
      </div>
   )
}

function ProductCategoryRow() {
   return (
      <div>

      </div>
   )
}

function ProductRow(props) {

   const dtRows = props.dataRows
      .map((item, index) =>
         <li
            key={index}
            style={{
               padding: '1rem',
               margin: '1rem',
               border: '1px solid white'
            }}>
            {item.body}
         </li>)
   return (
      <div>
         {dtRows}
      </div>
   )
}



class FilteredProductTable extends Component {

   state = {
      data: [],
      filterText: ''
   }

   componentDidMount() {
      axios
         .get('/posts.json')
         .then((response) => {
            const posts = response.data;
            this.setState({ data: posts })
         })
   }

   filterHandler = (event) => {
      this.setState({
         filterText: event.target.value
      })
   }

   render() {
      const dataRows = this.state.data;
      const filterText = this.state.filterText;
      return (
         <div>
            <SearchBox searchhandler={this.filterHandler} />
            <ProductTable dataRows={dataRows} filterText={filterText} />
         </div>
      )
   }
}



ReactDOM.render(
   <React.StrictMode>

      <div style={{
         padding: '5rem',
         color: 'white',
         height: '1000vh',
         backgroundColor: '#282c34'
      }}>

         <FilteredProductTable />

         <SignUpDialog />
         <WelcomeDialog />
         <Page />
         <LoginControl />
         <Mailbox unreadMessages={messages} />
         <LoginButton />
         <LogoutButton />
         <Greeting isLoggedIn={false} />
         {presentational}
         {getGreetingUser(name)}
         <Clock />
         <Clock />
         <ParagraphH3 />
         {element}
         {paragraph}
         <Welcome name="Gábor" />
         <Welcome name="Anna" />
         <Welcome name="Zsófi" />
         <Comment authorName="Gábor" avatar="cukifej" comment="ÁÓ" text="bábábá" />
         <Comment authorName="Gábor" avatar="cukifej" comment="ÁÓ" text="bábábá" />
         <Comment authorName="Gábor" avatar="cukifej" comment="ÁÓ" text="bábábá" />
         <Comment authorName="Gábor" avatar="cukifej" comment="ÁÓ" text="bábábá" />
         <ActionLink />
         <Toggle />
         <List1 arr={arr} />

         <NameForm />
         <SelectForm />
         <FileUpdate />
         <Reservation />
         <Calculator />



      </div>




   </React.StrictMode >,
   document.getElementById('root')



);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
