/* 
Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
  in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also 
  have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)
  
  0. How are you today? 😊
  1. Please fix any obvious issues you see with the dropdown.
  2. Please then make improvements to the dropdown.
  3. Consider the different ways that this dropdown might be used and what changes would
     be neccessary to make it more flexible.
  4. If we wanted to sync this dropdown selection to the server with
     app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }) where would this be included?
  5. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items
     what changes should be made? (just a sentence or two or some code is ok).
  
  PS: No need to worry about CSS.
 */

import React, { useState } from 'react';

const pages1 = [
  {
    link: '/page2',
    label: 'Page 2'
  },
  {
    link: '/page3',
    label: 'Page 3'
  },
  {
    link: '/page4',
    label: 'Page 4'
  },
]

const pages2 = [
  {
    link: '/page5',
    label: 'Page 5'
  },
  {
    link: '/page6',
    label: 'Page 6'
  },
]

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // app.sync ( 'PATCH', 'user', {dropdown_1_state : {true, false}})
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expanded={isOpen} onClick={toggle}>{props.label}</button>

      <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu`} aria-labelledby="dropdownButton" role="menu">
        {isOpen && props.children}
      </ul>
    </div>
  );
}

const DropdownItem = (props) => {
  // TODO implement me
  return (
    <li>
      <a href={props.href}>{props.children}</a>
    </li>
  )
}

const App = () => {

  return (
    <nav>
      <a href="/page1">Page 1</a>
      <Dropdown label="More items">
        {
          pages1.map((page, key) => (
            <DropdownItem key={key} href={page.link}>{page.label}</DropdownItem>
          ))
        }
      </Dropdown>
      <Dropdown label="Even more items">
        {
          pages2.map((page, key) => (
            <DropdownItem key={key} href={page.link}>{page.label}</DropdownItem>
          ))
        }
      </Dropdown>
    </nav>
  );
}

export default App;