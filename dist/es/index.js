import * as components from 'element-plus/es/components';
export * from 'element-plus/es/components';

const install = (app) => {
    console.log(components, 'componentscomponentscomponents');
    Object.entries(components).forEach(([name, component]) => {
        return app.component(name, component);
    });
};
var index = {
    install,
};

export { index as default };
