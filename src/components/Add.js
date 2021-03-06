import React,{Component} from 'react';
import axios from 'axios';


class Add extends Component{


	addNote(e){

		// e.preventDefault();
		console.log("Clicked");
		const title = this.refs.title.value;
		console.log("title",title);
		const body = this.refs.body.value;
		console.log("body",body);



		axios.post('http://localhost:8080/note/add', {
    		title: title,
    		body: body
  		})
  		.then( (response) =>{
    		console.log("response",response);
        this.refs.title.value="";
        this.refs.body.value="";
  		})
  		.catch(function (error) {
    		console.log(error);
  		});

	}

	render() {

		return(

			<form className="form-horizontal">
    		  <fieldset>
    		    
    		  <div className="row form-group">
    		  <h1>Create a Note</h1>
    		  </div>
    		  
    		    <div className="row form-group">
    		    
    		      <label htmlFor="title" className="col-sm-2 col-form-label">Note Title</label>
    		      <div className="col-sm-8">
  		        	<input type="text"  className="form-control-plaintext" id="title" placeholder="Add a Title" ref="title"/>
  		        		</div>	
		      </div>
		        
		        
		        <div className="row form-group">
		        <label htmlFor="noteBody" className="col-sm-2 col-form-label">Note Body</label>
		        <div className="col-sm-8">
		        <textarea className="form-control" id="noteBody" rows="3" placeholder="Note Body"  ref="body"></textarea>
		        </div>
		      </div>
		        
		        <div className="row form-group">
		        <div className="col-md-4"></div>
		        <div className="col-md-8">
		        <button className="btn btn-primary" onClick={this.addNote.bind(this)}>Add note</button>
		        </div>
		        </div>
		        

    		  </fieldset>
    		 </form>

			)
	}
}

export default Add;