import './Header.css';


function Header() {

  let x = 10;
  x++;
  let y = 20;
  y--;
  let s = x + y;


  return (
  
  <header>
    <div>
      <p>Logo</p>
    </div>

    <ul>
      <li>Home</li>
      <li>Services</li>
      <li>About</li>
    </ul>
    
  </header>
  
  );

}

export default Header;