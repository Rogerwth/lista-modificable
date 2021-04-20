import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event'
import App from './app/App';
import rootReducer from './app/state/store';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()]
});

test('Buscar título lista', () => {
    render(<Provider store={store}><App /></Provider>);
    const lista = screen.getByText(/My list/i);
    // const add = screen.getByText(/Add/i);
    const remove = screen.getByText(/Remove/i);
    const undo = screen.getByText(/Undo/i);

    // Incompatible con la entrada de texto por el prompt
    // userEvent.click(add)
    userEvent.click(remove);
    userEvent.click(undo);

    expect(lista).toBeInTheDocument();
});
