import commonSkill from './common-skill'
import uniqueSkill from './unique-skill'
import numericalSkill from './numerical-skill'
import specialSkill from './special-skill'
const skill = {
    namespaced: true,
    modules: {
        common: commonSkill,
        unique: uniqueSkill,
        numerical: numericalSkill,
        special: specialSkill
    },
};

export default skill