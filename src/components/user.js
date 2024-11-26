import React from "react"
import AddUser from "./addUser"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5' //обязательно указывать эти функции в импорте
import logo from "./img/logo.jpg" 

class User extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      editform: false
    }
  }

    user = this.props.user //просто сократить код
    render(){
      return(
        <div className="user" >
            <IoCloseCircleSharp onClick={()=> this.props.onDelete(this.user.id)} className="delete-icon"/>
            <IoHammerSharp onClick={() => {
              this.setState({
                editform: !this.state.editform
              })
            }} className="edit-icon"/>
            <h3>{this.user.first_name} {this.user.last_name}</h3>
            
            <div> {this.props.user.image &&
              <img  class="image" src={logo}/>}
            </div>

            <img src={this.user.avatar}></img>
            <p>{this.user.email}</p>
            <b>Счастье: {this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
            {this.state.editform && <AddUser user={this.user} onAdd={this.props.onEdit}/*получаем метод onEdit и передаем  его в компонент AddUser под названием onAdd*//>}
        </div>
  )

    } 
  }

export default User