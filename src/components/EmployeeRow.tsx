import React from 'react'
/**
 * 
*
"id": 2,
"employee_name": "Garrett Winters",
"employee_salary": 170750,
"employee_age": 63,
"profile_image": ""
 */
type ComponentProps = {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
}

const EmployeeRow = (props:ComponentProps) => {
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.employee_name}</td>
            <td>{props.employee_salary}</td>
            <td>{props.employee_age}</td>
            <td>{props.profile_image}</td>
            <td>edit btn</td>
        </tr>
    )
}

export default EmployeeRow