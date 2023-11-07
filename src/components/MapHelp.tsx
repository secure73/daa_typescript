import React, { Fragment } from 'react';

const MapHelp = () => {
  type Student = {
    id: number;
    name: string;
  };

  const studentsArray:Array<Student> = [
    {
      id: 1,
      name: 'Student',
    },
    {
      id: 2,
      name: 'Student2',
    },
  ];

  return (
    <Fragment>
      {/* 1: map is a built-in function in JavaScript */}
      {/* 2: All JavaScript methods are usable in TypeScript */}
      {/* 3: However, TypeScript doesn't work in plain JavaScript or JSX */}
      {/* Using map */}
      {/* 1: map is a subsequent method */}
      {/* "map()" is incorrect! */}
      {/* We are mapping an existing array */}
      {/* A string, like "I am a student," is an array of characters */}
      {/* An object, like user { name: "student", age: 18 }, is mappable! */}
      {studentsArray.map(student => {
        console.log(student);
        return (
            <></>
            );
      })}

    </Fragment>
  );
};

export default MapHelp;