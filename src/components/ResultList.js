import React,{Component} from 'react';


class ResultList extends Component{

  constructor(){
    super();
      this.state = {
        items: []
      }
  }

  componentDidMount() {
    fetch("http://localhost:8080/note/all")
      .then(results => results.json())
      .then(results => this.setState({'items': results}));
    }


	render() {

		return (


      <table className="table table-hover">
        <thead>
         <tr>
             <th scope="col">Note Title</th>
             <th scope="col">Note Body</th>
             <th scope="col">Note Created</th>
         </tr>
       </thead>
       <tbody>

      {this.state.items.map(function(item, id){
        return  (
          <tr className="table-active"  key={id}>

             <td>{item.title}</td>
             <td>{item.body}</td>
             <td>{item.dateCreated}</td>
         </tr>
        )

        }
      )}
      </tbody>
      </table> 

      );

	}
}

export default ResultList;