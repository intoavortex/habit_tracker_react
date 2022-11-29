import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

const SimpleHabit = () => {
  // state = {
  //   count: 0,
  // }

  const [count, setCount] = useState(0); 
  /*
    useState를 쓰게 되면 react가 알아서 계속 기억하고 있음

    count는 실제의 state 값
    count를 업데이트 할 수 있는 함수인 setCount를 리턴!
  */
  // const spanRef = React.createRef();
  const spanRef = useRef(); // 한 번만 만들고 메모리에 저장 후 다시 그것을 재사용한다

  const handleIncrement = useCallback(() => { 
    // (자동) 반복해서 호출해도 동일한 콜백을 전달함
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }. [/* 어떤 값이 변경될 때마다 호출할 수 있다 */ count]); // 두 번째 인자에 아무것도 전달하지 않으면 mount와 update에 호출되고 빈 배열[]을 넣으면 mount 될 때만 호출!

  /*
    useEffect는 componentDidMount와 componentDidUpdate와 결함한 것임
    componentDidMount, componentDidUpdate 될 때마다 호출됨 
    -> 컴포넌트가 처음에 mount 됐을 때 나오고 update될 때마다 호출!
  */
  
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

/*
  class에서 멤버 변수는 class가 만들어질 때 한 번만 만들어지고 render 함수만 반복적으로 호출되는 반면에
  위의 함수는 클래스가 아님 component가 변경이 되면 코드블럭 전체가 반복해서 호출된다

  => function 컴포넌트는 prop이나 state가 변경이 되면 코드 전체가 반복이 되어진다
*/
