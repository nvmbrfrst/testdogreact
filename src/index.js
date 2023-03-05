import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import logoImageSrc from './images/ReactLogo.png'

// add .svg as react component
import { ReactComponent as Logo } from './images/logo.svg'

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

// const App = () => {
//  return (
//   <>
//     <Appheader />
//     <AppList />
//   </>
//  )
// }

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(<App/>);

// 4444444444 передача аргумента в компонент - props 44444444444444

const AppList = () => {
  const items = ['Мой первый элемент', "Мой второй элемент", "Мой третий элемент"];
  const firstItem = <li>qqqqqqqqqqqqq</li>;
  const isAuth = true;
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index} > {item} </li>
      })}
    </ul>
  )

}

const AppInput = ({ placeholder, label }) => {
  return (
    <label className='label'>
      {label}
      <input placeholder={placeholder} type='password' />
    </label>
  )
}

const Appheader = ({ title }) => {
  return (
    <div>
      {/* add .svg as react component */}
      <Logo />

      {/* add images from css */}
      <img className='imageReactLogo' src={logoImageSrc} />

      <h1 className='header-title'><span>{title}</span></h1>;

      {/* undefind 1.30 */}
      {title && <h1 className='header-title'><span>{title}</span></h1>}
    </div>
  )


}

const App = () => {
  return (
    <>
      <Appheader />
      {/* <Appheader title = 'Привет мир!'/> */}
      <AppList />
      {/* <Appheader title = '2Привет мир!'/> */}
      <AppInput placeholder="Введите ваше имя" label="Имя" />
      <AppInput placeholder="Введите ваше 2имя" label="2Имя" />

    </>
  )
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
