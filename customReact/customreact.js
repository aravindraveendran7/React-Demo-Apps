const rootContainer = document.getElementById("root");
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};
customRender(reactElement, rootContainer);

function customRender(reactElement, mainContainer) {
  const type = document.createElement(reactElement.type);
  type.innerHTML = reactElement.children;
  type.setAttribute("href", reactElement.props.href);
  type.setAttribute("target", reactElement.props.target);
  mainContainer.appendChild(type);
}
