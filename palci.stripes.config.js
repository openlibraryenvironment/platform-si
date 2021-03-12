module.exports = {
  okapi: { 'url':'https://palci-okapi.reshare.indexdata.com', 'tenant':'palci_si' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    showPerms: false
  },
  modules: {
    '@folio/developer' : {},
    '@folio/inventory' : {},
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
      alt: 'PALCI Shared Index',
    },
    favicon: {
      src: './tenant-assets/reshare-favicon.jpg',
    },
  },
};
