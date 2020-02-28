module.exports = {
  okapi: { 'url':'https://okapi-reshare.folio-dev-us-east-1-1.folio-dev.indexdata.com', 'tenant':'si_dev' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    showPerms: false,
    welcomeMessage: 'ReShare Shared Index -- DEV',
    platformName: 'SI',
    platformDescriptrion: 'Shared Index Dev',
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
      alt: 'Project ReShare',
    },
    favicon: {
      src: './tenant-assets/reshare-favicon.png',
    },
  },
};
