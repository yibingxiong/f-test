/* eslint-disable quote-props */
export default {
    'static': {
        options: {
            root: './static',
            opts: {
            },
        },
    },
    'i18n': {
        enable: true,
        name: 'i18n',
        options: {
            defaultLocale: 'zh-cn',
        },
    },
    'status': true,
    'test': true,
    'views': {
        enable: true,
        name: 'views',
        options: {
            root: './views',
            opts: {
                map: { html: 'nunjucks' },
            },
        },
    },
};
