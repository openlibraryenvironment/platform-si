module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'si' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    showPerms: false
  },
  modules: {
    '@folio/calendar' : {},
    '@folio/developer' : {},
    '@folio/inventory' : {},
    '@folio/myprofile' : {},
    '@folio/plugin-find-instance' : {},
    '@folio/plugin-find-user' : {},
    '@folio/search' : {},
    '@folio/servicepoints' : {},
    '@folio/tags': {},
    '@folio/tenant-settings' : {},
    '@folio/users' : {}
  },
  branding: {
    logo: {
      src: './tenant-assets/reshare-logo.png',
      alt: 'Project Reshare',
    },
    favicon: {
      src: './tenant-assets/reshare-favicon.png',
    },
  },
};
