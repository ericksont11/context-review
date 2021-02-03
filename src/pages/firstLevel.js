import React, {useEffect, useContext} from 'react';
import Character from '../components/userCharacter'
import CharacterContextProvider from '../contexts/characterContext'
import { LevelContext} from '../contexts/levelContext';

const FirstLevel = () => {

    const level = useContext(LevelContext)

    useEffect(()=>{
        window.onresize = () => {
            if((window.innerHeight * 1.777) > window.innerWidth) {
                level.dispatch('RESIZE_PORTRAIT') 
            } else {
                level.dispatch('RESIZE_LANDSCAPE') 
            }
        }
    },[window])

    useEffect(() => {
        if((window.innerHeight * 1.777) > window.innerWidth) {
            level.dispatch('RESIZE_PORTRAIT') 
        } else {
            level.dispatch('RESIZE_LANDSCAPE') 
        }
    }, [])

    let backgroundStyle = {
        width:level.levelAttributes.width,
        height:level.levelAttributes.height,
        background:'linear-gradient(to bottom, blue 0%, blue 90%, green 90%, green 100%',
        position: 'absolute',
        top: '50%',
        left: '50%', 
        transform: 'translate(-50%, -50%)'
    }
 
    return  (
        <div style={backgroundStyle}>
            <CharacterContextProvider>
                <Character/>
            </CharacterContextProvider>
        </div>
    ) 
}

export default FirstLevel;