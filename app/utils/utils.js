export function isBoy(sex) {
    return 1 == sex;
}

export function isGirl(sex) {
    return 2 == sex;
}

export function isWardrobeSection(section) {
    return 0 == section;
}

export function isLooksSection(section) {
    return 1 == section;
}

export default { isBoy, isGirl, isWardrobeSection, isLooksSection };
