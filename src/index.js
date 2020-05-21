import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';




function getGreetingUser(props) {
   if (props) return <h1>Hello {formatName(props)} !</h1>
}


function formatName(props) {
   return props.firstName + ' ' + props.lastName;
}

class Paragraph_h3 extends React.Component {
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

   function clickHandler(e) {
      e.preventDefault();
      alert('clicked')
   }
   return (
      <div >
         <a onClick={clickHandler} style={{ color: 'white' }} href="#"> Kattints rám</a>
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

ReactDOM.render(
   <React.StrictMode>

      <div style={{
         padding: '5rem',
         color: 'white',
         height: '1000vh',
         backgroundColor: '#282c34'
      }}>

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
         <Paragraph_h3 />
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

      </div>




   </React.StrictMode>,
   document.getElementById('root')



);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
