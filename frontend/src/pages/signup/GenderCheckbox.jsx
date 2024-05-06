import { useState } from "react";
import { Form } from "react-bootstrap";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div>
			<Form.Check
				type='checkbox'
				id='male-checkbox'
				label='Male'
				checked={selectedGender === "male"}
				onChange={() => onCheckboxChange("male")}
			/>
			<Form.Check
				type='checkbox'
				id='female-checkbox'
				label='Female'
				checked={selectedGender === "female"}
				onChange={() => onCheckboxChange("female")}
			/>
		</div>
	);
};
export default GenderCheckbox;
