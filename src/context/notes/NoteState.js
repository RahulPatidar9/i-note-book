import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const state = {
    name: "Rahul",
    company: "Amazon",
  };

  return (
    <NoteContext.Provider value={state}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
