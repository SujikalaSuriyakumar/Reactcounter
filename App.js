import { useState } from "react";
function Counter({start})
{
const [c, setCounter] = useState(start);
return(
<main>
     <p> Value :  {c}</p>
<button onClick={() => setCounter((value) => value -1)}>
Decrement
</button>
</main>
);
}
function App(){
  return( <>
  <Counter start={0} />
  <Counter start={-123} />
  <Counter start={-100} />
  <Counter start={1000} />
  </>
  );
}
export default App;
