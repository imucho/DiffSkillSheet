import commonSkill from './common-skill'
import uniqueSkill from './unique-skill'
import numericalSkill from './numerical-skill'
const skill = {
    namespaced: true,
    modules: {
        common: commonSkill,
        unique: uniqueSkill,
        numerical: numericalSkill,
    },
};

export default skill