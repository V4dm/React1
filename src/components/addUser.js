import React from "react"

class AddUser extends React.Component {
  userAdd = {}
  constructor (props){ // конструктор и обьявление состояний
    super(props)
    this.state = {
      first_name: "",
      last_name: "",

      email: "",
      image: false,
      
      age: "",
      isHappy: false,
    }
  }
    render() { // создание формы, обработка событий, передача информации от пользователя
      return(
        <form ref={(el) => this.myForm = el}>
            <input placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
            <input placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
           

            <textarea placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}></textarea>
            <label htmlFor="isHappy">Счастлив?</label>
            <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>

            <label htmlFor="image">Добавить фото?</label>
            <input type="checkbox" id="image" onChange={(e) => this.setState({image: e.target.checked})}/>
            <button type="button" onClick={() => {
              this.myForm.reset() // очистка формы после добваления массива
              this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,

                email: this.state.email,
                image: this.state.image,

                age: this.state.age,
                isHappy: this.state.isHappy,
              }
              if(this.props.user)
                this.userAdd.id = this.props.user.id
              this.props.onAdd(this.userAdd) //добавление информации от пользователя
            }
          }>Добавить</button>
        </form>
      )
    } 
  }
export default AddUser