const cardEffect001 = ({
  time = '.2s',
  translate = '-3px, -3px',
  shadow = '3px 5px 8px #e4e4e4'
} = false) => `
    transition: ${time};
    :hover{
        transition: ${time};
        transform: translate(${translate});
        box-shadow: ${shadow};
        cursor: pointer;
    }
    :active{
        box-shadow: none;
    }
`
export default cardEffect001
