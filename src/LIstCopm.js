import React, {useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default function LIstCopm(props) {
	const [line, setLine] = useState(false);

	const CutIt = () => {
		setLine(true);
	};


	return ( 
	<React.Fragment>
		<div className="todo_style">
			<span onClick={CutIt}>
			<DeleteIcon/>
			</span>
			 <li style={{ textDecoration : line ? 'line-through' : 'none'}}>{props.text}</li>
		</div>
	</React.Fragment>
	)
}