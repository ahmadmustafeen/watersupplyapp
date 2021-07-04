import { Alert } from "react-native"

export  const validate = value => {
    if(!value) return Alert.alert("Something missing here")
    return true
}

// to be done later on
export  const validateIsNumber = value => {
    if(!value) return false
    return true
}
export  const validateIsEmail = value => {
    if(!value) return false
    return true
}

export  const validateLength = value => {
    if(!value) return false
    return true
}
export  const validateSequence = value => {
    if(!value) return false
    return true
}