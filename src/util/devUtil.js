export const restrictToDev = () => !(process?.env?.NODE_ENV === "production");
