import React from 'react';
import logo from './ParkLogo.png'

const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.image} />
      </header>
    </>
  )
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    margin: '20px',
    backgroundColor: '#493856',
    color: '#fff',
    
  },
  title: {
    margin: 10,
  },
  image: {
    width: '238px',
    height: '100px',
    marginRight: '1rem',
  },
};

export default Header;
