import { askApi } from "../Api/askApi";

let initialManState = {
};

const manReducer = (state = initialManState, action) => {
    let newState = {...state};
    switch(action.type){
        default:
            return newState;
    }
}

export function getUsersListActionCreator(data){

}

export function askThunkCreator(data, navigate) {
    return (dispatch) => {
        return askApi.ask(data)
            .then(response => {
                if (response !== null) {
                    console.log(response);
                }
            });
    };
}

export default manReducer;