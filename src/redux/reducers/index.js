// Questo sarà il nostro primo Reducer! (il nostro ufficio postale di smistamento richieste)
// un reducer dev'essere una funzione PURA, che prenderà lo STATO CORRENTE nel momento della "dispatch" e l'action inviata
// grazie a queste due informazioni computerà SEMPRE un NUOVO STATO (senza ambiguità)

// OGNI VOLTA che verrà "risvegliato" (ad ogni dispatch) avrà bisogno di leggere dalla nostra action il suo TYPE (per questo il type è obbligatorio)
// in più opzionalmente ci potrebbe essere anche un payload da dover leggere

// da dove cominciare quindi?
// si comincia col creare uno stato iniziale (default) per il primo avvio dell'applicazione:

const initialState = {
  favorites: {
    companies: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          companies: [...state.favorites.companies, action.payload]
        }
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          // content: state.cart.content.slice(0, action.payload).concat(state.cart.slice(action.payload + 1)) // ✅
          // content: [...state.cart.content.slice(0, action.payload), ...state.cart.content.slice(action.payload + 1)] // ✅
          companies: state.favorites.companies.filter(
            (_, i) => i !== action.payload
          ) // ✅ filter è un altro metodo che non muta l'array originale e ritorna
          // un nuovo array, perfetto per quello che serve a noi
        }
      };

    default:
      return state;
  }
};

export default mainReducer;
