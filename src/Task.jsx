import React, { useState, useEffect, memo, Component } from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3 style={{ color: 'red' }}>⚠️ Error: A protected component crashed.</h3>;
    }

    return this.props.children;
  }
}

const BuggyComponent = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('I crashed! (Caught by ErrorBoundary)');
  }
  return <h4>I am a healthy component!</h4>;
};

const SquareComponent = memo(({ number }) => {
  console.log(`[SquareComponent] Re-rendering. Input: ${number}`);
  
  const squaredValue = number * number;

  return (
    <div style={{ padding: '10px', margin: '5px', border: '1px solid #ccc' }}>
      <p>Input Number: {number}</p>
      <p>Squared Value: {squaredValue}</p>
    </div>
  );
});

const PortalMessage = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '15px',
      backgroundColor: 'lightgreen',
      border: '1px solid green',
      zIndex: 1000
    }}>
      {children}
    </div>,
    portalRoot
  );
};

function Task() {
  const [count, setCount] = useState(0);
  const [squareNumber, setSquareNumber] = useState(5);
  const [showPortal, setShowPortal] = useState(true);
  const [shouldBuggyThrow, setShouldBuggyThrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPortal(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>   
      <label >Enter the number </label>
      <input 
        type="number" 
        value={squareNumber} 
        onChange={(e) => setSquareNumber(Number(e.target.value))}
        style={{ marginLeft: '10px' }}
      />
      
      <SquareComponent number={squareNumber} />

      <hr />    
      <button onClick={() => setShouldBuggyThrow(true)}>
        Click to Crash Component Below
      </button>
      
      <ErrorBoundary>
        <BuggyComponent shouldThrow={shouldBuggyThrow} />
      </ErrorBoundary>
      
      <hr />
    </>
  );
}

export default Task;