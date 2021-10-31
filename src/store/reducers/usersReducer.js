const SET_USERS = "SET_USERS"


export const defaultState = {
    users: []
}

//reducer

export default function usersReducer(state = defaultState, action){
    switch (action.type) {

		case SET_USERS: 
			return {
				...state, users: [...state.users, ...action.payload]
			}
			
        default:
            return state
    }
}


//action creators

export const setUsers = (users) => ({type: SET_USERS, payload: users})

