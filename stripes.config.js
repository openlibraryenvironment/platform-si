module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    showPerms: false
  },
  modules: {
    '@folio/calendar' : {},
    '@folio/developer' : {},
    '@folio/myprofile' : {},
    "@folio/plugin-create-inventory-records": {},
    '@folio/plugin-find-instance' : {},
    '@folio/plugin-find-user' : {},
    '@folio/servicepoints' : {},
    '@folio/tags': {},
    '@folio/tenant-settings' : {},
    '@folio/users' : {}
  },
  branding: {
    logo: {
      src: './tenant-assets/reshare-logo.png',
      alt: 'ReShare Shared Index',
    },
    favicon: {
      src: './tenant-assets/reshare-favicon.jpg',
    },
  },
};
