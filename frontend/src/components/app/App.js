import './App.css';
import React ,{Component} from "react";
import Category from "../category/category";
import crudRepository from "../../repository/crudRepository";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }
  render() {
    return(
        <div>
          <Category categories = {this.state.categories}/>
        </div>
    )
  }
  loadCategories = () =>{
    crudRepository.getCategories()
        .then((data) => {
          this.setState({
            categories: data.data
          })
        })
  }
  componentDidMount() {
    this.loadCategories();

  }
}

export default App;
