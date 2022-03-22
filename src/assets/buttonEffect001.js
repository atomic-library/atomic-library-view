const buttonEffect = ({
  when = 'hover',
  bg = '#c4b107',
  c = '#fff',
  insertStyle = '',
  zIndex = 1,
  h = '80px',
  time = '.2s',
  transition = '.2s ease-in-out all'
} = false) => `
position: relative;
overflow: hidden;
display: inline-flex;
align-items: center;
justify-content: center;

.effect-content{
    position: relative;
    z-index: ${zIndex + 1};
    transition: ${transition};
    transition-duration: ${time};
}
::after {
    content: "";
    width: 100%;
    height: 100%;
    background: ${bg};
    position: absolute;
    z-index: ${zIndex};
    top: -${h};
    left: 0;
    transition-duration: ${time}
    transition: ${transition};
    transition-duration: ${time};
}

:${when}::after {
    top: 0;
}
:${when}{
    color: ${c};
}
${insertStyle}
`
export default buttonEffect
