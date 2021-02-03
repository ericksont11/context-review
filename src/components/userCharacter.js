import React, {useContext, useEffect} from 'react';
import { CharacterContext } from '../contexts/characterContext';
let character

function Character() {
    character = useContext(CharacterContext);

    const characterStyle = {
        height:'6%',
        width:'4.5%',
        position: 'absolute',
        backgroundColor:'purple',
        left:character.characterAttributes.left,
        top:character.characterAttributes.top
    }

    let movement =(e) => {
          if (e.keyCode === 39 && parseInt(character.characterAttributes.left ) < 94.5
          && character.characterAttributes.isJumping === false
          ){
            character.dispatch({type:'MOVE_RIGHT'})
          } else if (e.keyCode === 37 && parseInt(character.characterAttributes.left ) > 1
          && character.characterAttributes.isJumping === false
          ) {
            character.dispatch({type:'MOVE_LEFT'})
          } 
          else if (e.keyCode === 38 && character.characterAttributes.isJumping === false) {
            character.dispatch({type:'JUMPING'})
            let timer = 0
            for(let i=1; i < 10; i++){
                timer = timer + 100
                if (i < 5) {
                    setTimeout(()=>{
                        character.dispatch({type:'MOVE_UP'})
                    },timer)
                } else if (i === 5){
                    setTimeout(()=>{
                        character.dispatch({type:'BEGIN_FALLING'})
                    },timer)
                } else if (i < 9){
                    setTimeout(()=>{
                        character.dispatch({type:'MOVE_DOWN'})
                    },timer)
                } else {
                    setTimeout(()=>{
                        character.dispatch({type:'RESET_JUMP'})
                    }, timer)
                }
            }
          }
      }
    
      useEffect(() => {
        document.addEventListener('keydown', movement)
      }, [])

    return (
        <div style={characterStyle}>

        </div>
    );
}

export default Character;
