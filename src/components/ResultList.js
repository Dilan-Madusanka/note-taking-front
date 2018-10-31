import React,{Component} from 'react';

class ResultList extends Component{

	render() {

		return(

			<table className="table table-hover">
  			<thead>
    			<tr>
      				<th scope="col">Note Id</th>
      				<th scope="col">Note Title</th>
      				<th scope="col">Note Body</th>
      				<th scope="col">Note Created</th>
    			</tr>
  			</thead>
  			<tbody>
    			<tr className="table-active">
      				<th scope="row">Active</th>
      				<td>Column content</td>
      				<td>Column content</td>
      				<td>Column content</td>
    			</tr>
  			</tbody>
			</table> 

			



			)
	}
}

export default ResultList;