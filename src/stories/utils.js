import React from 'react';

// TODO: Export to .css
export const StoryItem = (props) => (
  <div style={ Object.assign({ margin: '0 16px' }, props.style) }>
    { props.title &&
        <h2 style={ { fontFamily: 'sans-serif', textAlign: 'center', margin: '6px 0' }}>
          { props.title }
        </h2>
    }
    <p>{ props.description }</p>
    <div style={ { display: 'flex', fontFamily: 'sans-serif', 'justifyContent': 'center'} }>
      { props.children }
    </div>
  </div>
);

export const Row = (props) => (
  <div style={ Object.assign({ marginBottom: '20px', padding: '6px 0 12px' }, props.style) }>
    { props.title &&
        <h1 style={ { fontFamily: 'sans-serif', textAlign: 'center', margin: '12px 0' }}>
          { props.title }
        </h1>
    }
    <div style={ { display: 'flex', 'justifyContent': 'center'} }>
      { props.children }
    </div>
  </div>
);
