import React, {useState} from 'react'
import "./Bar.css";
import "./Loading.css";
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigate } from "react-router-dom";
import Cursor from './Cursor';


const ContentComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ replace set to true
    navigate('/Loading', {replace: true});
  };
  return (
   
   <div className="bg">
    <View>
    <Cursor />
    <button className='usure'  onClick={handleClick}>Are you sure?</button>
    </View>

    </div>
  );
}

const Bar = () => {
  const [show, setShow] = useState(false);
  return (


    <div className="bg">
    <View>
      <Cursor />

      {<button className='button' onClick={() => setShow(!show)}>Dont Click here</button>}
      {show && <ContentComponent />}

    </View>
    </div>
  );
}
export default Bar;


