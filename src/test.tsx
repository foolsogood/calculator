import React, { useState, useEffect, useRef, useReducer } from "react";

export default function() {
  const inputRef = useRef<HTMLInputElement>(null);
  interface Person {
    name: string;
    age: number;
  }
  interface State {
    num: number;
  }
  type Action = {
    type: "plus" | "minus";
  };
  const reducer = function(state: State, action: Action) {
    switch (action.type) {
      case "plus":
        return { num: state.num + 1 };
      case "minus":
        return { num: state.num - 1 };
      default:
        return { num: state.num };
    }
  };
  const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, { num: 5 });
  const [person, setPerson] = useState<Person>({
    name: "tom",
    age: 10
  });
  useEffect(() => {
    console.log("num change");
    return () => {
      console.log("component unmount");
    };
  }, [state.num]);
  return (
    <div>
      <p>{count}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        +
      </button>
      <p>---------------------------</p>
      <p>{state.num}</p>

      <button
        onClick={() => {
          dispatch({
            type: "plus"
          });
        }}>
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "minus"
          });
        }}>
        -
      </button>
      <p>---------------------------</p>

      <p>
        {person.name} is {person.age} old
      </p>
      <input ref={inputRef} />
      <button
        onClick={() => {
          const _name = inputRef.current.value;
          console.log(_name);
          setPerson((obj: Person) => {
            return {
              ...obj,
              name: _name
            };
          });
        }}>
        change
      </button>
    </div>
  );
}
