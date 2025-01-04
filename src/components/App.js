import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import '../styles/App.css';
const App = () => {
    const [text,setText] = useState("");
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false);
    },[])

    let onInput = (e) => {
        setText(e.target.value);
    }

  return (
    
    <div className="app">
        {loading ? (<div className="loading">Loading...</div>) : (
      <><textarea className='textarea' value={text} onChange={onInput}>

              </textarea>
              <div
                  className='preview'
                  dangerouslySetInnerHTML={{ __html: marked(text) }}>
                  </div></>
        )
    }
    </div>
  );
}

export default App;
