import XeButton from './button';

/* istanbul ignore next */
XeButton.install = function(Vue) {
  Vue.component(XeButton.name, ElButton);
};

export default XeButton;