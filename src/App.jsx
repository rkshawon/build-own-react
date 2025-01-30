const App = ({ value, updateValue }) => {
  return (
    <div>
      <input onInput={updateValue} value={value} />
      <h2>Hello {value}</h2>
    </div>
  );
};

export default App;
