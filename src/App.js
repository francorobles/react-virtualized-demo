import React from 'react';
import { Collection } from 'react-virtualized';
import Box from './Box';

let currentY = 1;
let setCount = 0;
let setIndex = 0;

// Collection data as an array of objects
let list = []
for (var i = 0; i < 500001;i ++) {
  list.push({ name: i + 1, x: 1, y: 1, width: 100, height: 100 })
}

function cellRenderer ({ index, key, style }) {

  style.backgroundColor = '#000';
  style.borderStyle = 'solid';
  style.borderColor = '#FFF';
  style.borderWidth = '3px';
  style.borderRadius = '5px';
  style.color = '#FFF';
  style.padding = '5px';

  return <Box key={key} style={style} boxId={list[index].name} />
}

function cellSizeAndPositionGetter ({ index }) {
  const datum = list[index]
  
  setIndex++

  if (((index + 1) * datum.width) > window.innerWidth && setCount == 0) {
    setCount = index
  }

  if (setIndex > setCount && setCount != 0) {
    currentY += 115;
    setIndex = 0;
  }


  return {
    height: datum.height,
    width: datum.width,
    x: (setIndex - 1) * datum.width,
    y: currentY
  }
}


function App() {
  return (
    
    <div className="App">
      <Collection
        cellCount={list.length}
        cellRenderer={cellRenderer}
        cellSizeAndPositionGetter={cellSizeAndPositionGetter}
        height={window.innerHeight}
        width={window.innerWidth}
      />
      <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '25px', backgroundColor: 'blue', color: '#fff' }}>
        <marquee>Test Using react-virtualized</marquee>
      </div>
    </div>
  );
}

export default App;
