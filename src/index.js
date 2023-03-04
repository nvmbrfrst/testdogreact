import React from 'react';
import { createRoot } from 'react-dom/client';

// const el = React.createElement(
//   'h1',
//   null,
//   'Hello world!'
// )

// 1111111111111111111111111111111111111111

// const el = <h1>qweqweqwe</h1>

// console.log(el)


// 22222222222 - jsx - fragment - 2222222222222222

// const el = (
//   <><h1><span>qewqweqwe</span></h1><ul>
//     <li>myfirstcomponent</li>
//     <li>mysecondcomponent</li>
//   </ul></>
// );


// 3333333333333 - js - component - 33333333333333333

// const AppList = () => {
//   return (
//     <ul>
//       <li>AppList</li>
//       <li>AppList</li>
//     </ul>
//   )
// }

// const Appheader = () => {
//   return <h1><span>AppHeader</span></h1>

// }

// const el = (
//   <>
//     <Appheader />
//     <AppList />

//   </>
// );

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(el);

// 44444444444444444444444444444444444444444444444444


const AppList = () => {


    const items = ['Мой первый элемент', 'Мой второй элемент'];
    const firstItem = <li>Самый первый элемент</li>
    const isAuth = true;
    return (
       <ul>
          {
             isAuth ? firstItem :null
          }
          {
             items.map(item => <li>{item}</li>)
          }
          <li>{items[0]}</li>
          <li>{items[1]}</li>
       </ul>
    )
 

  }



const Appheader = () => {
  return <h1><span>AppHeader</span></h1>

}

const App = () => {
  return (
    <>
      <Appheader />
      <AppList />

    </>
  )
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(<App/>);


