import React from 'react'

type ComponentProps = {
    studentName: string
    studentAge: number
}

const Student = (props : ComponentProps) => {
  return (
        <li>Name is: {props.studentName} and is {props.studentAge} years old</li>
  )
}

export default Student