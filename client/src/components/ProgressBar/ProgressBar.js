import React from "react";
import { Progress } from 'reactstrap';
import './ProgressBar.css';


function ProgressBar() {
	return (
        <>
        <Progress multi className="progressbar">
        <Progress bar value="15" />
        <Progress bar color="success" value="18" />
        <Progress bar color="info" value="25">You can write on this!</Progress>
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>
      </>
	);
}

export default ProgressBar;