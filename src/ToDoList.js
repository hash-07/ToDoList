import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import LIstCopm from './LIstCopm';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Style from './Style.css'

export default function ToDoList() {
	const [item, setItem] = useState("");
	const [newitem, setNewItem] = useState([]);

	const itemEvent = (event) => {
		setItem(event.target.value);
	}

	const InputData = () =>{
		setNewItem((Valux)=>{
			return [...Valux,item]
			
		})
		setItem(" ");
	}




	return (
<React.Fragment>
		<div className="main_div">
			<div className="center_div">
				<br/>
					<h1> To Do List </h1>
				<br/>
							<input type="text" value={item} placeholder="Add an item"
							onChange={itemEvent}/>
										<Button className="newBtn"
										onClick={InputData}>
										<AddIcon/>

										</Button>
				<br/>
						<ol>
						 	
						 	{
						 		newitem.map((val,index)=> {
						 			return<LIstCopm key={index} text={val}/>
						 		}
						 	)}
						 
						</ol>


			</div>
		</div>

</React.Fragment>
	)
}