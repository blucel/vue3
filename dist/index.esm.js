import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';

const withInstall = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};

const iconProps = {
    size: {
        type: Number
    },
    color: {
        type: String
    }
};

var script = defineComponent({
    name: 'ElIcon',
    props: iconProps,
    setup(props) {
        const style = computed(() => {
            if (!props.size && !props.color) {
                return {};
            }
            return Object.assign(Object.assign({}, (props.size ? { 'font-size': props.size + 'px' } : {})), (props.color ? { color: props.color } : {}));
        });
        return { style };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: "w-icon",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "packages/components/icon/src/icon.vue";

withInstall(script);

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Elcon: script
});

const install = (app) => {
    console.log(components, 'componentscomponentscomponents');
    Object.entries(components).forEach(([name, component]) => {
        return app.component(name, component);
    });
};
var index = {
    install,
};

export { script as Elcon, index as default };