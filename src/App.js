import React from 'react';

// Header component
const Header = () => {
  return (
    <header style={{ backgroundColor: 'lightgray', padding: '10px' }}>
      <h1>KU KASETSART UNIVERSITY</h1>
    </header>
  );
};

// Menu component
const Menu = () => {
  return (
    <nav style={{ backgroundColor: 'darkgray', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex' }}>
        <li style={{ marginRight: '10px' }}>
          <a href="/web">Home</a>
        </li>
        <li style={{ marginRight: '10px' }}>
          <a href="/news">News</a>
        </li>
        <li style={{ marginRight: '10px' }}>
          <a href="/courses">Courses</a>
        </li>
        <li style={{ marginRight: '10px' }}>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

// Main component that uses Header and Menu
const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      {/* Other components or content */}
    </div>
  );
};

//test first commit by teardrop//

//test 2//

export default App;