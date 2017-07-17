import React from 'react';

// TODO: Export to .css
export const StoryItem = (props) => (
  <div style={ { margin: '0 16px' } }>
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
  <div style={ { marginBottom: '32px' } }>
    { props.title &&
        <h1 style={ { fontFamily: 'sans-serif', textAlign: 'center', margin: '12px 0' }}>
          { props.title }
        </h1>
    }
    <div style={ { display: 'flex', 'justifyContent': 'center'} }>
      { props.children }
    </div>
  </div>
)
