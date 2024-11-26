import React from "react"
import Header from "./components/header"
import Users from "./components/users"
import AddUser from "./components/addUser"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
  constructor (props){ //конструктор и обьявление состояний
    super(props)

    axios.get(baseUrl).then((res) =>{ //получение информации по url адресу, а затем выполнение кода указанного в then
      this.setState({users: res.data.data}) // если перейти по ссылке,то можно увидеть что все нужные данные записаны в data
    }) 


    this.state = {
      users: []
    }
    this.addUser = this.addUser.bind(this) // даем разрешение функции работать с состояниями
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)

  }

  render(){
    return(<div>
      <Header title ="Список пользователей" /> 
      <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} /*передача методов в компонентах (это нужно проделать во всех вложенных компонентах(в файле Users а затем User) )*//>
      </main>
      <aside>
        <AddUser onAdd = {this.addUser}/>
      </aside>
    </div>)
  }

  deleteUser(id){ // перебирается весь массив и записываются все элементы кроме того, что указан в условии
    this.setState({
      users: this.state.users.filter((el) => el.id != id) 
    })
  }

  editUser(user){ 
    let allUsers = this.state.users // получили ввсех пользователей
    allUsers[user.id - 1] = user  // нашли нужного и заменили на того, что аолуаем в качестве параметра

    this.setState({users: []}, () => { // очищаем массив и сразу заполняем его новыми элементами
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user) { // к текущему списку добавляется обьект, который состоит из id + параметры, которые передаются в функцию(даные от пользователя)
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}] })
  }

}

export default App