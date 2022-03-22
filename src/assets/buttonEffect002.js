const buttonEffect002 = ({
  when = 'hover',
  bg = '#18a362',
  c = '#fff',
  insertStyle = '',
  zIndex = 1,
  h = '300px',
  time = '.2s',
  transition = '.2s ease-in-out all'
} = false) => `
position: relative;
overflow: hidden;
display: inline-flex;
align-items: center;
justify-content: center;
cursor: pointer;
.effect-content{
    position: relative;
    z-index: ${zIndex + 1};
    transition:  ${transition};
    transition-duration: ${time};
}
::after {
    content: "";
    width: 100%;
    height: ${h};
    background: ${bg};
    position: absolute;
    z-index: ${zIndex};
    top: -${h};
    left: 0;
    transition:  ${transition};
    border-radius: 0px 0px ${h} ${h};
}

:${when}::after {
    top: 0;
}
:${when}{
    
    color: ${c};
}
${insertStyle}
`
export default buttonEffect002
