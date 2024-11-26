import React from "react"
import User from "./user"

class Users extends React.Component {

    render(){
    if(this.props.users.length > 0){
      return(
        <div>
            {this.props.users.map((el) => (
              <User onDelete={this.props.onDelete} onEdit={this.props.onEdit} key = {el.id} user = {el} /*обьявление методов из старших компонентф(передаем дальше в компонент User) и передача значения ключа для метода map()*//>
            ))}
        </div>
      )}
    else{
    return(
        <div className="user">
            <h3>Пользоввателей нет</h3>
        </div>
      )}
    } 
  }

export default Users