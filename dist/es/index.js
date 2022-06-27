import * as components from 'ya-plus/es/components';
export * from 'ya-plus/es/components';

const install = (app) => {
    Object.entries(components).forEach(([name, component]) => {
        return app.component(name, component);
    });
};
var index = {
    install,
};

export { index as default };
