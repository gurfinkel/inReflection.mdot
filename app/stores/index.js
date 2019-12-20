import ConfigStore from './config.store';
import LooksStore from './looks.store';
import SettingsStore from './settings.store';

const config = new ConfigStore();
const looks = new LooksStore();
const settings = new SettingsStore();

export default {
    config,
    looks,
    settings,
};
