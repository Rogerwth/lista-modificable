import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ActionCreators } from 'redux-undo';
import {
    setList
} from './app-store';

const useApp = () => {

    const dispatch = useDispatch();

    const app = useSelector(state => state.app.present, shallowEqual);

    /* 
        Function to remove the selected elements from the list
     */
    const removeElement = useCallback(listToRemove => {
        const newList = app.list.filter((el) => {
            return listToRemove.indexOf(`${el.id}`) < 0;
        });
        dispatch(setList(newList));
    },[app.list, dispatch]);

     /* 
        Function to add an element to the list
     */
    const addElement = useCallback(element => {
        const newList = [...app.list, element]
        dispatch(setList(newList));
    },[app.list, dispatch]);

     /* 
        Function to undo the previous change
     */
    const goBack = useCallback(() => {
        dispatch(ActionCreators.undo());
    }, [dispatch]);

    return {
        app,
        addElement,
        removeElement,
        goBack
    };
};

export default useApp;
