import media from './media';

const breakpoint = (name, getStyle) => props => {
  if (media[name]) {
    return media[name](props.breakpoints)(getStyle(props, name));
  } else {
    return getStyle(props, name);
  }
};

export default breakpoint;
