import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ActionCreators } from 'redux-undo';
import {
    setLista
} from './app-store';

const useApp = () => {

    const dispatch = useDispatch();

    const app = useSelector(state => state.app.present, shallowEqual);

    const removeElement = useCallback(listToRemove => {
        const newLista = app.lista.filter((el) => {
            return listToRemove.indexOf(`${el.id}`) < 0;
        });
        dispatch(setLista(newLista));
    },[app.lista, dispatch]);

    const addElement = useCallback(element => {
        const newLista = [...app.lista, element]
        dispatch(setLista(newLista));
    },[app.lista, dispatch]);

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
