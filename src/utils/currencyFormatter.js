export default (value) => {
  return `$${value.toFixed(2)}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
