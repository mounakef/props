
import './App.css';
import Profile from './profile/component/Profile'
import photo from "./profile/component/unnamed.jpg"
import './profile/component/Profile.css'
function App() {
  // console.log(photo)
  const handelName=(name)=> alert(name);
  return (
    <div className="App">
      <Profile name={"mouna"}  profession ="developer"  bio  ="i am  a fullstack developer" handelName={handelName} >
      <img src ={photo} width='160px' height ='180px' />
      
      </Profile>
      
    </div>
  );
}

export default App;
