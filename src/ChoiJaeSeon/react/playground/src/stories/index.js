import React from 'react';

import { storiesOf } from '@storybook/react';
import App from '../App';
import Search from '../Search';
import Content from '../Content';
import Test from '../Test';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


  storiesOf("All", module).add("default", () => <App />);
  storiesOf("Search", module).add("Todolist", () => <Search />);
  storiesOf("Content", module).add("localList", () => <Content />);
  storiesOf("Tab", module).add("TabList", () => <Test />);