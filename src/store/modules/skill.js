import commonSkill from './common-skill'
import uniqueSkill from './unique-skill'
const skill = {
    namespaced: true,
    modules: {
        common: commonSkill,
        unique: uniqueSkill,
    },
};

export default skill