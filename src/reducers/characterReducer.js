export const characterReducer = (state, action) => {
    switch (action.type) {
        case 'MOVE_LEFT':
            return {
                ...state,
                left: parseFloat(state.left) - state.speed + '%',
                jumpSpeed: state.jumpSpeed
            }
        case 'MOVE_RIGHT':
            return {
                ...state,
                left: parseFloat(state.left) + state.speed + '%',
            }
        case 'JUMPING':
            return {
                ...state,
                isJumping: true,
            } 
        case 'MOVE_UP':
            return {
                ...state,
                top: parseFloat(state.top) -  window.innerHeight / ((window.innerHeight / 100 ) * state.jumpSpeed) + '%',
                jumpSpeed: state.jumpSpeed * 2
            }
        case 'BEGIN_FALLING':
            return {
                ...state,
                top: parseFloat(state.top) + window.innerHeight / ((window.innerHeight / 100) * (state.jumpSpeed / 2)) + '%',
                jumpSpeed: state.jumpSpeed / 4
            }
        case 'MOVE_DOWN':
            return {
                ...state,
                top: parseFloat(state.top) + window.innerHeight / (window.innerHeight / 100 * state.jumpSpeed)+ '%',
                jumpSpeed: state.jumpSpeed / 2
            }
        case 'RESET_JUMP':
            return {
                ...state,
                jumpSpeed: 10,
                isJumping: false
            }
        default:
            return state
    }

};