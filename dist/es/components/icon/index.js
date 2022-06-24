import { withInstall } from 'element-plus/es/utils/with-install';
import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';

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

export { script as Elcon, script as default };
